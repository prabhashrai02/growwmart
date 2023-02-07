import { Product } from '@/UI/ProductPage/Types';
import { GetServerSideProps } from 'next';

export { default } from '@/UI/ProductListPage';

export const getServerSideProps: GetServerSideProps<{data: Product[]}> = async () => {
    const result = await fetch('https://fakestoreapi.com/products/')
    const data: Product[] = await result.json();
    return {
        props: {
            data,
        },
    }
}