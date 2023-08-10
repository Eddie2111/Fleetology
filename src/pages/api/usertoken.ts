import type { NextApiRequest, NextApiResponse } from 'next'
import { decrypt } from './module/jwtdcrypt';

type Data = {
    data: Decoded
}
type Decoded = {
    serial: string
    email: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const token = req.body.token;
    const decoded:Decoded = decrypt(token);
    res.status(200).json({ data: decoded })
}







