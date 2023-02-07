import { QueryData } from "@/Common/Filters/Types";
import { CartList } from "@/UI/CartPage/Types";

export const findItemInCart = (cartProducts: CartList[], id: number) => {
    const item = cartProducts.find(item => item.product.id === id);
    return item;
}

export const extractData = ({ value, sort, selectCategories, priceFilter }: QueryData) => {

    const extractedValue = JSON.stringify(value)
    const extractedSort = JSON.stringify(sort)
    const extractedCategories = JSON.stringify(selectCategories)
    const extractedPrice = Number(priceFilter)

    const searchValueLength = value ? value.length : 0;
    const searchValue = value ? (extractedValue.substring(1, 1 + searchValueLength)) : '';

    const sortLength = sort ? sort.length : 0;
    const sortBy = sort ? extractedSort.substring(1, 1 + sortLength) : '';

    const catArray = extractedCategories && extractedCategories.substring(1, extractedCategories.length - 1).split(',').filter((ele) => ele);
    const filterCategory: Set<FormDataEntryValue> = extractedCategories ? new Set([...catArray]) : new Set();
    const urlPrice = extractedPrice ? extractedPrice : 0;

    return {
        sortBy, filterCategory, urlPrice, searchValue
    }
}