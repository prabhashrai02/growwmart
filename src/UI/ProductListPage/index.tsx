import Card from '@/Common/Card';
import Filters from '@/Common/Filters';
import { setProductList } from '@/Store/slices/productSlice';
import { RootState } from '@/Store/store';
import { useProductArray } from '@/utils/customHooks';

import React, { ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import style from './ProductListPage.module.css';


const ProductListPage = () => {
  const showProducts = useSelector((state: RootState) => state.product.showList);

  const dispatch = useDispatch();
  const { productArray } = useProductArray();
  
    useEffect(() => {
      productArray && dispatch(setProductList(productArray));
    }, [productArray]);

  return (
    <>
      <div className={style.productlist43page}>
        <Filters />
        <div className={style.product23All}>
          <div className={style.productlist41allProducts}>
            {
              showProducts?.map((item, index): ReactNode => {
                return <Card data={item} key={index} />
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductListPage;
