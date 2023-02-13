import { CartList } from "@/UI/CartPage/Types";
import { Product } from "@/UI/ProductPage/Types";

export type CartState = {
    cartProducts: CartList[],
    totalCost: number,
}

export type WishState = {
    wishList: Product[],
}

export type ProductState = {
    productList: Product[],
    showList: Product[] | null,
    searchValue: string,
    categories: string[],
}

export type AddGivenQuantity = {
    product: Product,
    quantity: number,
}