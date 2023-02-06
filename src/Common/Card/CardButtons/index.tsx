import Button from '@/Common/Button';
import { addGivenQuantity } from '@/Store/slices/cartSlice';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { CardButtonProps } from './Types';
import style from './CardButtons.module.css';
import { useRouter } from 'next/router';
import { AddGivenQuantity } from '@/Store/slices/Types';

const CardButtons = (props: CardButtonProps) => {
    const dispatch = useDispatch();
    const router = useRouter();

    const [quantity, setQuantity] = useState(1);
    const { check, data } = props;

    const handleQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
        const enteredNumber = Number(event.currentTarget.value);
        console.log(enteredNumber)

        if (Number.isNaN(enteredNumber)) return;
        if (enteredNumber <= 0) {
            setQuantity(1);
        }
        else {
            setQuantity(enteredNumber);
        }
    }

    const handelClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault();
    }

    const addQuantity = () => {
        const addGiven: AddGivenQuantity = {
            product: data,
            quantity: quantity
        };

        dispatch(addGivenQuantity(addGiven));
    }

    const buyNow = () => {
        const addGiven: AddGivenQuantity = {
            product: data,
            quantity: quantity
        };

        const cartURL = '../cart';
        router.push(cartURL)
        return dispatch(addGivenQuantity(addGiven));
    }

    return (
        <div>
            {
                check && (
                    <div className={style.card80AddQuantity}>
                        <div>
                            <label>Quantity: </label>
                            <input type='number' value={quantity} onChange={(event) => handleQuantity(event)} className={style.card43inputQuantity} />
                        </div>
                        <div className={style.card98Buttons} onClick={(e) => handelClick(e)}>
                            <Button value='Add to Cart' className={style.card78AddToCart} func={() => addQuantity()} />
                            <Button value='Buy Now' className={style.card54BuyNow} func={() => buyNow()} />
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default CardButtons;
