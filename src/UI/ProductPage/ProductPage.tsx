import Card from '@/Common Components/Card/Card';
import { Product } from '@/utils/Types';
import React, { useEffect, useState } from 'react'

const ProductPage = () => {

  const [product, setProduct] = useState<Product | undefined>();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/1')
      .then(res => res.json())
      .then(data => {
        setProduct(data);
      })
  }, []);

  return (
    <div>
      {
        product &&
        <Card data={product} productPage={true} />
      }
    </div>
  )
}

export default ProductPage;
