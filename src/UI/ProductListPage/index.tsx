import Card from '@/Common/Card';
import CardSkeleton from '@/Common/Card/CardSkeleton';
import Filters from '@/Common/Filters';
import { setProductList } from '@/Store/slices/productSlice';
import { RootState } from '@/Store/store';
import Link from 'next/link';

import React, { ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductListHeading from './ProductListHeading';

import style from './ProductListPage.module.css';
import { ProductListProps } from './Types';


const ProductListPage = ({ data }: ProductListProps) => {

  const showProducts = useSelector((state: RootState) => state.product.showList);
  const showSkeleton = [1, 2, 3, 4, 5, 6];
  const dispatch = useDispatch();

  useEffect(() => {
    data && dispatch(setProductList(data));
  }, [data])

  return (
    <>
      <div className={style.productlist43page}>
        <Filters />
        <div className={style.product23All}>
          <ProductListHeading />
          <div className={style.productlist41allProducts}>
            {
              showProducts && showProducts.length ?
                showProducts.map((item, index): ReactNode => {
                  return (
                    <Link key={index} href={`../product/${item?.id}`}>
                      <Card data={item} />
                    </Link>
                  )
                })
                :
                data ?
                  showSkeleton.map((_, index): ReactNode => {
                    return <CardSkeleton key={index} />
                  })
                  :
                  <div className={style.product79EmptyList}>No result match your criteria</div>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductListPage;
