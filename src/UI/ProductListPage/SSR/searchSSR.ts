import { GetServerSideProps } from "next";

import { QueryData, FilterData } from "@/Common/Filters/Types";
import { filterProductList } from "@/utils/filterList";
import { extractData } from "@/utils/functions";
import { Product } from "../../ProductPage/Types";

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

        const result = await fetch(`${process.env.BASE_URL}/api/products/`)
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
