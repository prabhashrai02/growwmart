import { Product } from "@/UI/ProductPage/Types";

export type CartList = {
    product: Product,
    quantity: number,
}

export type CartProduct = {
    productId: number,
    quantity: number,
}
