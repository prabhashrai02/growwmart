import dynamic from "next/dynamic";

import { capitalizeFirstChar } from "@/utils/functions";
import { GetModifiedClassesProps } from "./Types";

import style from "./Card.module.css";

export const getModifiedClasses = (props: GetModifiedClassesProps) => {
    const { data, productPage, cartPage, wishList } = props;

    const ImageWrapper = dynamic(() => import("../ImageWrapper"), { ssr: false });
    const category = data && data.category && capitalizeFirstChar(data.category);
    const showCartData = cartPage && !wishList;

    let modifyCardProductStyle = "";
    let modifyCardAlignment = "";
    let cardProductWithButton = "";
    let modifyProductDetail = "";

    switch(true) {
        case productPage: {
            modifyCardProductStyle = `${style.card75Product}`;
            modifyCardAlignment = `${style.card45ProductDetails}`;
            cardProductWithButton = `${style.card12ProductImageButtons}`;
            modifyProductDetail = `${style.card67ProductDescription}`;
            break;
        }
        case cartPage: {
            modifyCardProductStyle = `${style.card77Product}`;
            modifyCardAlignment = `${style.card44ProductDetails}`;
            cardProductWithButton = "";
            modifyProductDetail = `${style.card67ProductDescription}`;
            break;
        }
        default : {
            modifyCardProductStyle = "";
            modifyCardAlignment = "";
            cardProductWithButton = "";
            modifyProductDetail = "";
        }
    }

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