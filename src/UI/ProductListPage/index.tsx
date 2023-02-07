import Card from '@/Common/Card';
import CardSkeleton from '@/Common/Card/CardSkeleton';
import Filters from '@/Common/Filters';
import { setProductList } from '@/Store/slices/productSlice';
import { RootState } from '@/Store/store';
import { useProductArray } from './customProductListHook';

import React, { ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import style from './ProductListPage.module.css';


const ProductListPage = () => {
  const showProducts = useSelector((state: RootState) => state.product.showList);
  const showSkeleton = [1, 2, 3, 4, 5, 6];
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
              showProducts.length ?
                showProducts.map((item, index): ReactNode => {
                  return <Card data={item} key={index} />
                })
                :
                showSkeleton.map((_ , index): ReactNode => {
                  return <CardSkeleton key={index} />
                })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductListPage;
