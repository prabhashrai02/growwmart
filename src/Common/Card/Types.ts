import { Product } from "@/UI/ProductPage/Types";

export type CardProps = {
    data?: Product,
    cartPage: boolean,
    productPage: boolean,
    quantity: number,
    showDescription: boolean,
    wishList: boolean,
}

export type GetModifiedClassesProps = {
    data: Product | undefined,
    productPage: boolean,
    cartPage: boolean,
    wishList: boolean
}