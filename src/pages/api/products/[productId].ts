import { getProduct } from '@/utils/database';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { productId } = req.query;
  const extractedProductId = Number(productId);

  const product = await getProduct(extractedProductId);

  if (product) {
    res.status(200).json(product)
  }
  else {
    res.status(404).json("Not Found");
  }
}