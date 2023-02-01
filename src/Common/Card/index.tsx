import { CardProps } from './Types';

import React from 'react';

import style from './Card.module.css';
import CardTitle from './CardTitle';
import CardButtons from './CardButtons';
import CardRating from './CardRating';
import CardDesc from './CardDesc';
import CardCartData from './CardCartData';

const Card = (props: CardProps) => {

    const data = props.data;
    const cartPage = props.cartData;
    const productPage = props.productPage;

    const cardStyle = productPage ? `${style.card75Product}` : "";
    const cardAlignment = productPage ? `${style.card45ProductDetails}` : "";

    return (
        <div className={`${style.card54Product} ${cardStyle}`}> {
            data && (
                <div className={`${style.card23ProductDetails} ${cardAlignment}`}>
                    <img src={data.image} />
                    <div className={style.card23ProductDescription}>

                        <CardTitle check={productPage} title={data.title} />
                        <p>{data.category}</p>
                        <div className={style.card98ProductPriceRating}>
                            <span className={style.cart78ProductPrice}>&#x20b9; {data.price}</span>
                            <CardRating data={data.rating} />
                        </div>
                        <CardDesc check={productPage} data={data.description} />
                        <CardButtons check={productPage} data={data} />
                        <CardCartData check={cartPage} />
                    </div>
                </div>
            )
        }
        </div>
    )
}

export default Card;
