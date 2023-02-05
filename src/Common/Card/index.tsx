import { CardProps } from './Types';

import React from 'react';

import style from './Card.module.css';
import CardTitle from './CardTitle';
import CardButtons from './CardButtons';
import CardRating from './CardRating';
import CardDesc from './CardDesc';
import CardCartData from './CardCartQuantity';
import Link from 'next/link';
import CardBookmark from './CardBookmark';
import CardProductOffers from './CardProductOffers';

const Card = (props: CardProps) => {

    const data = props.data;
    const cartPage = props.cartData;
    const productPage = props.productPage;
    const quantity = props.quantity;
    const showDesc = props.showDescription;


    const modifyCardProductStyle = productPage ? `${style.card75Product}` : cartPage ? `${style.card77Product}` : "";

    const modifyCardAlignment = productPage ? `${style.card45ProductDetails}` : cartPage ? `${style.card44ProductDetails}` : "";

    const cardProductWithButton = productPage ? `${style.card12ProductImageButtons}` : "";

    const modifyProductDetail = productPage ? `${style.card67ProductDescription}` : cartPage ? `${style.card67ProductDescription}` : "";

    const productURL = `../product/${data?.id}`;

    return (
        <div className={`${style.card54Product} ${modifyCardProductStyle}`}> {
            data && (
                <Link href={productURL}>
                    <div className={`${style.card23ProductDetails} ${modifyCardAlignment}`}>
                        <CardBookmark data={data} />

                        <div className={`${style.card89ImageHolder} ${cardProductWithButton}`}>
                            <img src={data.image} />
                            <CardButtons check={productPage} data={data} />
                        </div>

                        <div className={`${style.card23ProductDescription} ${modifyProductDetail}`}>
                            <CardTitle productPage={productPage} cartPage={cartPage} title={data.title} />
                            <p>{data.category}</p>
                            <div className={style.card98ProductPriceRating}>
                                <span className={style.cart78ProductPrice}><h4>&#x20b9; {data.price}</h4></span>
                                <CardRating data={data.rating} />
                            </div>
                            <CardDesc check={showDesc} data={data.description} />
                            <CardProductOffers check={productPage} />
                            <CardCartData check={cartPage} quantity={quantity} data={data} />
                        </div>

                    </div>
                </Link>
            )
        }
        </div>
    )
}

export default Card;
