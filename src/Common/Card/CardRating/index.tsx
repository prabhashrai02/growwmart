import React from 'react';
import style from './CardRating.module.css';
import star from '@/Assets/star.png';
import { CardRatingProps } from './Types';

const CardRating = (props: CardRatingProps) => {
    const data = props.data;

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
