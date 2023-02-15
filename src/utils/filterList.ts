import { FilterData } from "@/Common/Filters/Types";
import { Product } from "@/UI/ProductPage/Types";
import { capitalizeFirstChar } from "./functions";

export const filterProductList = (productList: Product[], filterData: FilterData) => {

    let showList = productList;

    const sort = String(filterData.sort);
    const categories = filterData.selectCategory;
    const maxPrice = filterData.priceFilter;
    const searchValue = String(filterData.searchValue);

    if (categories && categories.size) showList = filterCategories(categories, showList, productList);

    if (maxPrice !== undefined && maxPrice !== null) showList = filterMaxPrice(maxPrice, showList);

    showList = filterSort(sort, showList);

    if (searchValue) showList = search(searchValue, showList);

    if (showList.length) return showList;

    return null;
}

const filterCategories = (categories: Set<FormDataEntryValue>, showList: Product[], productList: Product[]) => {

    showList = productList.filter(item => {
        return categories.has(capitalizeFirstChar(item.category));
    });

    return showList;
}

const filterMaxPrice = (maxPrice: number, showList: Product[]): Product[] => {
    showList = showList.filter(item => {
        return item.price <= maxPrice;
    })

    return showList;
}

const filterSort = (sort: string, showList: Product[]) => {

    if (sort === 'asc' || sort === 'dec') {
        showList = sortByName(sort, showList);
    }
    else if (sort === 'lowHigh' || sort === 'highLow') {
        showList = sortByPrice(sort, showList);
    }
    return showList;
}

const sortByName = (sort: string, showList: Product[]) => {

    if (sort === 'asc') {
        showList.sort(function compare(a, b) {
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
        showList.sort(function compare(a, b) {
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

const sortByPrice = (sort: string, showList: Product[]) => {

    if (sort === 'lowHigh') {
        showList.sort(function compare(a, b) {
            if (a.price < b.price) {
                return -1;
            }
            if (a.price > b.price) {
                return 1;
            }
            return 0;
        });
    }
    else if (sort === 'highLow') {
        showList.sort(function compare(a, b) {
            if (a.price < b.price) {
                return 1;
            }
            if (a.price > b.price) {
                return -1;
            }
            return 0;
        });
    }

    return showList;
}

const search = (searchValue: string, showList: Product[]) => {
    if (searchValue) {
        const searchWord = String(searchValue).trim().toLowerCase();
        showList = showList.filter((item) => {
            return item.title.toLowerCase().includes(searchWord) || item.category.toLowerCase().includes(searchWord);
        })
    }

    return showList;
}