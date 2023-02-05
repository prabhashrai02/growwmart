import { CartList } from "@/UI/CartPage/Types";
import { Product } from "@/UI/ProductPage/Types";

export type CartState = {
    cartProducts: CartList[];
    totalCost: number;
}

export type WishState = {
    wishList: Product[];
}

export type ProductState = {
    productList: Product[],
    showList: Product[]
}

export type AddToCart = {
    product: Product,
    quantity: number,
}