import Card from '@/Common/Card';
import { useProduct } from '@/utils/customHooks';

const ProductPage = () => {
  const { product } = useProduct();
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