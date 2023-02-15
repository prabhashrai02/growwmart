import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { Product, ProductPageProp } from './Types';

import Card from '@/Common/Card';
import CardSkeleton from '@/Common/Card/CardSkeleton';
import ProdutFeatured from './ProductFeatured';
import ProductPath from './ProductPath';

import style from './ProductPage.module.css';

const ProductPage = ({ product }: ProductPageProp) => {

  return (
    <div className={style.product34ProductPage}>
      <Head>
        <title>
          {product.title}
        </title>
        <meta content={product.description} />
      </Head>

      <ProductPath product={product} />
      <div className={style.product67CardContainer}>
        {
          product ?
            <Card data={product} showDescription={true} productPage={true} cartPage={false} quantity={0} wishList={false} />
            :
            <CardSkeleton productPage={true} />
        }
      </div>
      <ProdutFeatured />
    </div>
  )
}

export default ProductPage;


export const getServerSideProps: GetServerSideProps<{ product: Product }> = async (context) => {

  const { productId } = context.query;

  try {
    const result = await fetch(`${process.env.BASE_URL}/api/products/${productId}`);
    const product = await result.json();

    if (product === "Not Found") throw product;

    return {
      props: {
        product,
      },
    }
  }
  catch (e) {
    return {
      notFound: true
    };
  }
}