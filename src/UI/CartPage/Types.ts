import { Product } from "@/Common/Card/Types";

export type CartState = {
    value: number;
    products: CartList[];
    totalCost: number;
}

export type CartList = {
    product: Product,
    quantity: number;
}

export type CartProduct = {
    productId: number;
    quantity: number;
}