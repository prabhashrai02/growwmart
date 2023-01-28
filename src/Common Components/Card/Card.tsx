import { CardProps } from '@/utils/Types';

import star from '../../Assets/icons8-star-64.png';

import React from 'react';

import style from './Card.module.css';
import Ellipsis from '../Ellipsis/Ellipsis';

const Card = (props: CardProps) => {

    return (
        <div className={style.card54Product}> {
            props.data && (
                <div className={`${style.card23ProductDetails}`}>
                    <img src={props.data.image} />
                    <div className={style.card23ProductDescription}>

                        <h3><Ellipsis text={props.data.title} size={35} /></h3>
                        <p>{props.data.category}</p>

                        {
                            props.showDescription && (
                                <>
                                    <br></br>
                                    <p>{props.data.description}</p>
                                </>
                            )
                        }

                        <br></br>
                        <h2>{props.data.price} &#x20b9;</h2>
                        <br></br>

                        <div className={style.card09Rating}>

                            <div className={style.card39RatingStar}>
                                <p>{props.data.rating.rate}</p>
                                <img src={star.src} />
                            </div>

                            &emsp;
                            <p>({props.data.rating.count})</p>
                        </div>
                    </div>
                </div>
            )
        }
        </div>
    )
}

export default Card;
