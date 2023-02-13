import React from 'react'

import { CardButtonProps } from './Types';
import { useCardButtons } from './useCardButton';

import Button from '@/Common/Button';

import style from './CardButtons.module.css';

const CardButtons = (props: CardButtonProps) => {

    const { check, quantity, handleQuantity, handelClick, addQuantity, buyNow } = useCardButtons(props);
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
