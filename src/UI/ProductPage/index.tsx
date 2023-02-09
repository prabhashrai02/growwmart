import Card from '@/Common/Card';
import CardSkeleton from '@/Common/Card/CardSkeleton';
import { useProduct } from './customProductHooks';
import style from './ProductPage.module.css';
import ProductPath from './ProductPath';

const ProductPage = () => {

  const { product } = useProduct();

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