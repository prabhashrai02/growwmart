import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllCategories } from '../../../utils/database';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const allCategories = await getAllCategories();

  res.status(200).json(allCategories)
}