import React from 'react';

import { CardButtonProps } from './Types';
import { useCardButtons } from './useCardButton';

import Button from '@/Common/Button';

import style from './CardButtons.module.css';

const CardButtons = (props: CardButtonProps) => {

    const { check, quantity, handleQuantity, handelClick, addQuantity, buyNow, increaseQuantity, decreaseQuantity} = useCardButtons(props);

    return (
        <div>
            {
                check && (
                    <div className={style.card80AddQuantity}>
                        <div>
                            <span className={style.input234NumberDecrement} onClick={() => decreaseQuantity()} >–</span>
                            <input className={style.input14Number} type="text" onChange={(event) => handleQuantity(event)} value={quantity} min="0" max="10" />
                            <span className={style.input34NumberIncrement} onClick={() => increaseQuantity()} >+</span>
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
