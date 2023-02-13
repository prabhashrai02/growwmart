import React from 'react';
import { useDispatch } from 'react-redux';
import Image from 'next/image';

import { useFunctions } from './useFunctions';
import { removeItem } from '@/Store/slices/cartSlice';
import { CardCartDataProps } from './Types';

import Button from '@/Common/Button';

import add from '@/Assets/plus.svg';
import minus from '@/Assets/minus.svg';

import style from './CardCartQuantity.module.css';

const CardCartQuantity = ({ check, quantity, data }: CardCartDataProps) => {
    const dispatch = useDispatch();
    const { handelClick, handleAdd, handleRemove } = useFunctions(quantity, data);

    return (
        <div>
            {
                check && (
                    <div onClick={(event) => handelClick(event)}>
                        <div className={style.cart46CartQuantity}>
                            <Image src={add} alt='add more quantity' onClick={() => handleAdd()} />
                            <h5>Count: {quantity}</h5>
                            <Image src={minus} alt='reduce quantity' onClick={() => handleRemove()} />
                        </div>

                        <Button value='Remove Item' className='' func={() => dispatch(removeItem(data))} />
                    </div>
                )
            }
        </div>
    )
}

export default CardCartQuantity;
