import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { capitalizeFirstChar } from '@/utils/functions';
import { ProductPathProps } from './Types';

import style from './ProductPath.module.css';

const ProductPath = ({ product }: ProductPathProps) => {

    const allProductsURL = '../allproducts';
    const productName = product?.title;
    const category = product?.category && capitalizeFirstChar(product?.category);
    const { push } = useRouter();

    const goToCategory = () => {
        push({
            query: { value: '', sort: null, selectCategories: category, priceFilter: 1000 },
            pathname: "/search",
        });
    }

    return (
        <div className={style.product54Path}>
            <Link href={allProductsURL}> <span> All Products </span> </Link>
            &nbsp; &gt; &nbsp;
            <span onClick={() => goToCategory()} className={style.product78Category}> {category} </span>
            &nbsp; &gt; &nbsp;
            {productName}
        </div>
    )
}

export default ProductPath;
