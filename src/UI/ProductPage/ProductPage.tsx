import Card from '@/Common/Card';
import { getProduct } from '@/utils/functions';

const ProductPage = () => {
  const product = getProduct(11);

  return (
    <div>
      {
        product &&
        <Card data={product} productPage={true} />
      }
    </div>
  )
}

export default ProductPage;