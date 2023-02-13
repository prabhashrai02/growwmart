import { Product } from "@/UI/ProductPage/Types";

export type CardProps = {
    data?: Product,
    cartPage?: boolean,
    productPage?: boolean,
    quantity?: number,
    showDescription?: boolean,
    wishList?: boolean,
}

export type GetModifiedClassesProps = {
    data: Product | undefined,
    productPage: boolean | undefined,
    cartPage: boolean | undefined,
    wishList: boolean | undefined
}