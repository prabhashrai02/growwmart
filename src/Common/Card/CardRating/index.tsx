import React from 'react';

import { CardRatingProps } from './Types';

import star from '@/Assets/star.png';

import style from './CardRating.module.css';

const CardRating = ({ data }: CardRatingProps) => {

    return (
        <div className={style.card09Rating}>

            <div className={style.card39RatingStar}>
                <p>{data.rate}</p>
                <img src={star.src} />
            </div>
            <p className={style.card43RatingCount}>({data.count})</p>

        </div>
    )
}

export default CardRating;
