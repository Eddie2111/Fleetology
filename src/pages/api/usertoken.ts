import type { NextApiRequest, NextApiResponse } from 'next'
import { decrypt } from './module/jwtdcrypt';

type Data = {
    token: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const token = req.body.token;
    const decoded = decrypt(token);
    res.status(200).json({ data: decoded })
}
