import { Product } from '@/UI/ProductPage/Types';
import { ALL_PRODUCTS } from './constants';

export const getAllProductData = async () => {

    const data = await fetch(ALL_PRODUCTS);
    const response = await data.json();
    return response;
}

export const getAllCategories = async () => {

    const data = await fetch(ALL_PRODUCTS);
    const response: Product[] = await data.json();

    const allUniqueCategories: Set<string> = new Set();

    response.forEach ((item) => {
        allUniqueCategories.add(item.category);
    })

    const allCategories: string[] = [];

    allUniqueCategories.forEach((entry) => {
        allCategories.push(entry);
    })

    return allCategories;
}

export const getProduct = async (productId: number) => {

    const data = await fetch(ALL_PRODUCTS);
    const response: Product[] = await data.json();

    const product = response.find(item => item.id === productId);

    return product;
}