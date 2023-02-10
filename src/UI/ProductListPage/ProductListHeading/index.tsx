import { QueryData } from '@/Common/Filters/Types';
import { RootState } from '@/Store/store';
import { extractData } from '@/utils/functions';
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import { getCategoriesString } from './getCategoriesString';
import style from './ProductListHeading.module.css';

const ProductListHeading = () => {
    const { pathname, query } = useRouter();
    const { value, sort, selectCategories, priceFilter } = query;

    const showProducts = useSelector((state: RootState) => state.product.showList);

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
                    <span className={style.product71Filters}>
                        {
                            <>
                                {

                                    searchValue &&
                                    <span>
                                        <strong>You searched for : &nbsp; </strong> "{searchValue}" &emsp;
                                    </span>
                                }
                            </>
                        }
                        {
                            <>
                                {
                                    sortString &&
                                    <span>
                                        <strong>Sort By : &nbsp; </strong> "{sortString}" &emsp;
                                    </span>
                                }
                            </>
                        }
                        {
                            <>
                                {
                                    (categoriesString.length - 2) ?
                                        <span>
                                            <strong>Categories : &nbsp; </strong>
                                            {categoriesString}
                                            &emsp;
                                        </span>
                                        :
                                        <></>
                                }
                            </>
                        }
                        {
                            <>
                                {
                                    urlPrice &&
                                    <span>
                                        <strong>Price : &nbsp; </strong> "{urlPrice}"
                                    </span>
                                }
                            </>
                        }

                    </span>

                    {
                        <span>
                            Showing <strong> {showProducts?.length} </strong> results
                        </span>
                    }
                </>

            }
        </div>
    )
}

export default ProductListHeading;
