import Button from '@/Common/Button';
import { addToCart } from '@/Store/slices/cartSlice';
import React from 'react'
import { useDispatch } from 'react-redux';
import { CardButtonProps } from './Types';
import style from './CardButtons.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const CardButtons = (props: CardButtonProps) => {
    const dispatch = useDispatch();
    const router = useRouter();

    const check = props.check;
    const data = props.data;

    const handelClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault();
    }

    const buyNow = () => {
        router.push("../cart")
        return dispatch(addToCart(data));
    }

    const cartURL = '../cart';
    return (
        <div>
            {
                check && (
                    <div className={style.card98Buttons} onClick={(e) => handelClick(e)}>
                        <Button value='Add to Cart' className={style.card78AddToCart} func={() => dispatch(addToCart(data))} />
                        <Button value='Buy Now' className={style.card54BuyNow} func={() => buyNow()} />
                    </div>
                )
            }
        </div>
    )
}

export default CardButtons;
