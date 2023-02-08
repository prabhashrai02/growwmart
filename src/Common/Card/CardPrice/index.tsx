import React from 'react';

import style from './CardPrice.module.css';
import { CardPriceProps } from './Types';

const CardPrice = ({ data }: CardPriceProps) => {

    const givenPrice = data.price;
    const value = givenPrice >= 100 ? ((givenPrice / 4) * 5).toFixed(2) : "";
    return (
        <div className={style.cart70BothPrice}>
            <span className={style.cart78ProductPrice}><h4>&#x20b9; {givenPrice} </h4></span>
            {
                value &&
                <>
                    <span><h4>&nbsp; <s>&#x20b9;{value}</s></h4></span> &nbsp; <span className={style.cart98OfferRate}>20% off</span>
                </>
            }
        </div>
    )
}

export default CardPrice;
