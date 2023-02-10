import Card from '@/Common/Card';
import CardSkeleton from '@/Common/Card/CardSkeleton';
import { GetServerSideProps } from 'next';
import style from './ProductPage.module.css';
import ProductPath from './ProductPath';
import { Product, ProductPageProp } from './Types';

const ProductPage = ({ product }: ProductPageProp) => {

  return (
    <div className={style.product34ProductPage}>
      <ProductPath product={product} />
      <div className={style.product67CardContainer}>
        {
          product ?
            <Card data={product} showDescription={true} productPage={true} />
            :
            <CardSkeleton productPage={true} />
        }
      </div>
    </div>
  )
}

export default ProductPage;


export const getServerSideProps: GetServerSideProps<{ product: Product }> = async (context) => {

  const { productId } = context.query;

  try {
    const result = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const product = await result.json();

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