import type { NextApiRequest, NextApiResponse } from 'next';
import { database } from '@/lib/mongo';
import ManagerModel from './schemas/manager';
import mongoose, { Schema, Document, Model } from 'mongoose';

type Data = {
  serial: string;
};

async function main() {
  if (mongoose.connection.readyState !== 1) {
    await mongoose
      .connect(process.env.MONGODB_URL || '', { maxPoolSize: 500 })
      .then((data) => console.log('connected to MongoDB'))
      .catch((err) => console.log(err));
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  await main();
  const result = await ManagerModel.find({}).exec();

  // Map the result to include only the required properties
  const mappedResult = result.map((item) => ({
    serial: item.serial,
  }));

  res.status(200).json(mappedResult);
}
