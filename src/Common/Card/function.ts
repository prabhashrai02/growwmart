import dynamic from "next/dynamic";

import { capitalizeFirstChar } from "@/utils/functions";
import { GetModifiedClassesProps } from "./Types";

import style from "./Card.module.css";

export const getModifiedClasses = (props: GetModifiedClassesProps) => {
    const { data, productPage, cartPage, wishList } = props;

    const ImageWrapper = dynamic(() => import("../ImageWrapper"), { ssr: false });

    const category = data && data.category && capitalizeFirstChar(data.category);
    const showCartData = cartPage && !wishList;

    const modifyCardProductStyle = productPage ? `${style.card75Product}` : cartPage ? `${style.card77Product}` : "";
    const modifyCardAlignment = productPage ? `${style.card45ProductDetails}` : cartPage ? `${style.card44ProductDetails}` : "";
    const cardProductWithButton = productPage ? `${style.card12ProductImageButtons}` : "";
    const modifyProductDetail = productPage ? `${style.card67ProductDescription}` : cartPage ? `${style.card67ProductDescription}` : "";

    return {
        ImageWrapper,
        category,
        showCartData,
        modifyCardProductStyle,
        modifyCardAlignment,
        cardProductWithButton,
        modifyProductDetail
    }

}