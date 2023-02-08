import { QueryData } from '@/Common/Filters/Types';
import { extractData } from '@/utils/functions';
import { useRouter } from 'next/router';
import React from 'react';
import { getCategoriesString } from './getCategoriesString';
import style from './ProductListHeading.module.css';

const ProductListHeading = () => {
    const { pathname, query } = useRouter();
    const { value, sort, selectCategories, priceFilter } = query;

    const extractedValues: QueryData = {
        value: value,
        sort: sort,
        selectCategories: selectCategories,
        priceFilter: priceFilter,
    }

    const { searchValue, sortBy, filterCategory, urlPrice } = extractData(extractedValues);
    const sortString = sortBy !== "null" ? sortBy : ""; 
    const categoriesString = getCategoriesString(filterCategory);

    const heading = pathname === '/search' ? `Search Result` : `Showing All Products`;
    return (
        <div className={style.product78ListHeading}>
            <h3>
                {heading}
            </h3>
            {
                pathname === '/search' &&
                <>
                    Applied Filters:-
                    <p>
                        {
                            <>
                                <strong>Search Value : </strong> "{searchValue}" &emsp;
                            </>
                        }
                        {
                            <>
                                <strong>Sort By : </strong> "{sortString}" &emsp;
                            </>
                        }
                        {
                            <>
                                <strong>Categories : </strong>
                                {categoriesString}
                                &emsp;
                            </>
                        }
                        {
                            <>
                                <strong>Price : </strong> "{urlPrice}"
                            </>
                        }
                    </p>
                </>

            }
        </div>
    )
}

export default ProductListHeading;
