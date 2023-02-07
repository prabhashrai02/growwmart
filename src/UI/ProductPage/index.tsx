import Card from '@/Common/Card';
import CardSkeleton from '@/Common/Card/CardSkeleton';
import { useProduct } from '@/utils/customHooks';
import style from './ProductPage.module.css';

const ProductPage = () => {

  const { product } = useProduct();

  return (
    <>
      <div className={style.product34ProductPage}>
        {
          product ?
          <Card data={product} showDescription={true} productPage={true} />
          :
          <CardSkeleton productPage={true} />
        }
      </div>
    </>
  )
}

export default ProductPage;