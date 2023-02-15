import React, { ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

import { setProductList } from '@/Store/slices/productSlice';
import { ProductListProps } from './Types';

import Card from '@/Common/Card';
import CardSkeleton from '@/Common/Card/CardSkeleton';
import Filters from '@/Common/Filters';
import ProductListHeading from './ProductListHeading';

import style from './ProductListPage.module.css';
import Head from 'next/head';

const ProductListPage = ({ data }: ProductListProps) => {

  const showSkeleton = [1, 2, 3, 4, 5, 6];
  const dispatch = useDispatch();

  useEffect(() => {
    data && dispatch(setProductList(data));
  }, [data])

  return (
    <>
      <div className={style.productlist43page}>
        <Head>
          <title>
            All Products
          </title>
        </Head>

        <Filters />
        <div className={style.product23All}>
          <ProductListHeading />
          <div className={style.productlist41allProducts}>
            {
              data ?
                data.length ?
                  data.map((item, index): ReactNode => {
                    return (
                      <Link key={index} href={`../product/${item.id}`}>
                        <Card data={item} cartPage={false} productPage={false} quantity={0} showDescription={false} wishList={false} />
                      </Link>
                    )
                  })
                  :
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
