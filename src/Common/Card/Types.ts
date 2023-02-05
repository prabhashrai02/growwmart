import { Product } from "@/UI/ProductPage/Types";

export type CardProps = {
    data?: Product,
    cartPage?: boolean,
    productPage?: boolean,
    quantity?: number,
    showDescription?: boolean;
}
