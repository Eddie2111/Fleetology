// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import jsonwebtoken from 'jsonwebtoken';

type IFormdata = {
    email: string;
    password: string;

}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const secrettoken = process.env.SECRET_TOKEN || 'secrettoken';
    const { email, password } = req.body;
    const token = await jsonwebtoken.sign({ email, password }, secrettoken, { expiresIn: '12h' });
    res.setHeader('Set-Cookie', `auth-token=${token}; path=/; HttpOnly; SameSite=Strict;`);
    res.status(200).json({ token: token});
}
