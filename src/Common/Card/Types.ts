import { Product } from "@/UI/ProductPage/Types";

export type CardProps = {
    data?: Product,
    cartData?: boolean,
    productPage?: boolean,
    cartPage?: boolean,
    quantity?: number,
    showDescription?: boolean;
}
