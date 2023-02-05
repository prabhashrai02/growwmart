import Card from '@/Common/Card';
import { useProduct } from '@/utils/customHooks';
import style from './ProductPage.module.css';

const ProductPage = () => {
  
  const { product } = useProduct();

  return (
      <div className={style.product34ProductPage}>
        {
          product &&
            <Card data={product} showDescription={true} productPage={true} />
        }
      </div>
  )
}

export default ProductPage;