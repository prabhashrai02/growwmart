import { QueryData } from "@/Common/Filters/Types";
import { CartList } from "@/UI/CartPage/Types";

export const findItemInCart = (cartProducts: CartList[], id: number) => {
    const item = cartProducts.find(item => item.product.id === id);
    return item;
}

export const extractData = ({ value, sort, selectCategories, priceFilter }: QueryData) => {

    const searchValue = extractStringFromQuery(value);
    const sortBy = extractStringFromQuery(sort);

    const extractedPrice = Number(priceFilter)
    const urlPrice = extractedPrice ? extractedPrice : 0;

    const extractedCategories = JSON.stringify(selectCategories)
    const catArray = extractedCategories && extractedCategories.substring(1, extractedCategories.length - 1).split(',').filter((ele) => ele);
    const filterCategory: Set<FormDataEntryValue> = extractedCategories ? new Set([...catArray]) : new Set();

    return {
        sortBy, filterCategory, urlPrice, searchValue
    }
}

export const extractStringFromQuery = (value: string | string[] | undefined) => {

    const queryValue = JSON.stringify(value);

    const valueLength = value ? value.length : 0;
    const extractedValue = value ? (queryValue.substring(1, 1 + valueLength)) : '';

    return extractedValue;
}