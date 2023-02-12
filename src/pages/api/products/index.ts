import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllProductData } from '../../../utils/database';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const allProductsList = await getAllProductData();

  res.status(200).json(allProductsList)
}