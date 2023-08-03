import type { NextApiRequest, NextApiResponse } from 'next';
import { database } from '@/lib/mongo';
import mongo from '@/lib/SingleMongo';
import ManagerModel from './schemas/manager';
import mongoose, { Schema, Document, Model } from 'mongoose';

type Data = {
  serial: string;
  email: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  mongo();
  const result = await ManagerModel.find({}).exec();

  // Map the result to include only the required properties
  const mappedResult = result.map((item) => ({
    serial: item.serial, email: item.email
  }));

  res.status(200).json(mappedResult);
}
