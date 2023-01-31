import Card from '@/Common/Card';
import Filters from '@/Common/Filters';
import { useProductArray } from '@/utils/customHooks';

import React, { ReactNode } from 'react'

import style from './ProductListPage.module.css';


const ProductListPage = () => {

  const { productArray } = useProductArray();

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
