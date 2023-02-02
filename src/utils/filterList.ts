import { FilterData } from "@/Common/Filters/Types";
import { Product } from "@/UI/ProductPage/Types";

export const filterProductList = (productList: Product[], filterData: FilterData) => {

    let showList = productList;

    const sort = filterData.sort;
    const categories = filterData.selectCategory;
    const maxPrice = filterData.priceFilter;
    const searchValue = filterData.searchValue;

    if (categories?.size) {
        showList = productList.filter(item => {
            return categories.has(item.category);
        });
    }

    if (maxPrice !== undefined) {
        showList = showList?.filter(item => {
            return item.price <= maxPrice;
        })
    }

    if (searchValue) {
        const searchWord = String(searchValue).trim();

        showList?.filter((item) => {
            return (item.title === searchWord) || (item.category === searchWord);
        })
    }

    if (sort === 'asc') {
        showList?.sort(function compare(a, b) {
            if (a.title < b.title) {
                return -1;
            }
            if (a.title > b.title) {
                return 1;
            }
            return 0;
        });
    }
    else if (sort === 'dec') {
        showList?.sort(function compare(a, b) {
            if (a.title < b.title) {
                return 1;
            }
            if (a.title > b.title) {
                return -1;
            }
            return 0;
        });
    }

    return showList;
}