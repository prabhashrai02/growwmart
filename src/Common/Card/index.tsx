import { CardProps } from '@/utils/Types';

import star from '@/Assets/icons8-star-64.png';

import React from 'react';
import { useDispatch } from 'react-redux';

import style from './Card.module.css';
import Ellipsis from '@/Common/Ellipsis';
import Button from '@/Common/Button';
import { increment } from '@/Store/slices/counterSlice';

const Card = (props: CardProps) => {
    const dispatch = useDispatch();

    const data = props.data;
    const cartPage = props.cartData;
    const productPage = props.productPage;

    const cardStyle = productPage ? `${style.card75Product}` : "";
    const cardAlignment = productPage ? `${style.card45ProductDetails}` : "";

    const increase = () => {
        console.log("aaya")
        dispatch(increment);
    }

    return (
        <div className={`${style.card54Product} ${cardStyle}`}> {
            data && (
                <div className={`${style.card23ProductDetails} ${cardAlignment}`}>
                    <img src={data.image} />
                    <div className={style.card23ProductDescription}>

                        {
                            productPage ? (

                                <h3> {data.title} </h3>
                            )
                                :
                                (
                                    <h3><Ellipsis text={data.title} size={35} /></h3>
                                )
                        }
                        <p>{data.category}</p>

                        {
                            productPage && (
                                <>
                                    <br></br>
                                    <p>{data.description}</p>
                                    <br></br>
                                </>
                            )
                        }

                        <h2>&#x20b9; {data.price}</h2>
                        <br></br>

                        <div className={style.card09Rating}>

                            <div className={style.card39RatingStar}>
                                <p>{data.rating.rate}</p>
                                <img src={star.src} />
                            </div>

                            &emsp;
                            <p>({data.rating.count})</p>

                        </div>
                        <>
                            {
                                productPage && (
                                    <div className={style.card98Buttons}>
                                        <Button value='Add to Cart' className={style.card78AddToCart} func={() => dispatch(increment())} />
                                        <Button value='Buy Now' className={style.card54BuyNow} func={() => dispatch(increment())} />
                                    </div>
                                )
                            }
                        </>
                        {
                            cartPage && (
                                <div>
                                    <img src='' />
                                    <h5>Count: 0</h5>
                                    <img src='' />
                                </div>
                            )
                        }
                    </div>
                </div>
            )
        }
        </div>
    )
}

export default Card;
