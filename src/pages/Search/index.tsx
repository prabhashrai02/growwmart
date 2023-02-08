import { FilterData, QueryData } from '@/Common/Filters/Types';
import { Product } from '@/UI/ProductPage/Types';
import { filterProductList } from '@/utils/filterList';
import { extractData } from '@/utils/functions';
import { GetServerSideProps } from 'next';

export { default } from '@/UI/ProductListPage';

export const getServerSideProps: GetServerSideProps<{ data: Product[] | null }> = async (context) => {

    try {

        const { value, sort, selectCategories, priceFilter } = context.query;
        const extractedValues: QueryData = {
            value: value,
            sort: sort,
            selectCategories: selectCategories,
            priceFilter: priceFilter,
        }

        const { sortBy, filterCategory, urlPrice, searchValue } = extractData(extractedValues);

        const filter: FilterData = {
            sort: sortBy,
            selectCategory: filterCategory,
            priceFilter: urlPrice,
            searchValue: searchValue,
        }

        const result = await fetch('https://fakestoreapi.com/products/')
        const productList: Product[] = await result.json();

        const data = filterProductList(productList, filter);

        return {
            props: {
                data,
            },
        }
    }
    catch (e) {
        return {
            notFound: true
        }
    }
}
