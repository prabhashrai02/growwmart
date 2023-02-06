import Button from '@/Common/Button';
import React from 'react';
import { CardCartDataProps } from './Types';
import style from './CardCartQuantity.module.css';
import { useDispatch } from 'react-redux';
import { removeItem } from '@/Store/slices/cartSlice';
import Image from 'next/image';
import add from '@/Assets/plus.svg';
import minus from '@/Assets/minus.svg';

const CardCartQuantity = (props: CardCartDataProps) => {
    const dispatch = useDispatch();

    const { check, quantity, data} = props;

    const handelClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault();
    }

    return (
        <div>
            {
                check && (
                    <div onClick={(event) => handelClick(event)}>
                        <div className={style.cart46CartQuantity}>
                            <Image src={add} alt='add more quantity' />
                            <h5>Count: {quantity}</h5>
                            <Image src={minus} alt='reduce quantity' />
                        </div>

                        <Button value='Remove Item' className='' func={() => dispatch(removeItem(data))}/>
                    </div>
                )
            }
        </div>
    )
}

export default CardCartQuantity;
