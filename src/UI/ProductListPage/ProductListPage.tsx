import Card from '@/Common/Card';
import Filters from '@/Common/Filters';

import React, { ReactNode, useEffect, useState } from 'react'

import style from './ProductListPage.module.css';

import type { Product } from '../../utils/Types';

const ProductListPage = () => {

  const [productArray, setProductArray] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
    .then(res => res.json())
    .then(element => {
      setProductArray(element)
    })
  }, [])

  return (
    <>
      <div className={style.productlist43page}>
        <Filters />
        <div className={style.productlist41alloproducts}>
          {
            productArray && 
            productArray.map((item, index): ReactNode => {
              return <Card data={item} key={index} />
            })
          }
        </div>
      </div>
    </>
  )
}

export default ProductListPage;
