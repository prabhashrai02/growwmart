import Button from '@/Common/Button';
import React from 'react';
import { CardCartDataProps } from './Types';
import style from './CardCartQuantity.module.css';
import { useDispatch } from 'react-redux';
import { removeItem } from '@/Store/slices/cartSlice';

const CardCartData = (props: CardCartDataProps) => {
    const dispatch = useDispatch();

    const cartPage = props.check;
    const quantity = props.quantity;
    const data = props.data;

    const handelClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault();
    }

    return (
        <div>
            {
                cartPage && (
                    <div onClick={(event) => handelClick(event)}>
                        <div className={style.cart46CartQuantity}>
                            <img src='' alt='add more'/>
                            <h5>Count: {quantity}</h5>
                            <img src='' alt='reduce quantity'/>
                        </div>

                        <Button value='Remove Item' className='' func={() => dispatch(removeItem(data))}/>
                    </div>
                )
            }
        </div>
    )
}

export default CardCartData;
