import React from 'react';
import Image from 'next/image';

import { useFunctions } from './useFunctions';
import { CardCartDataProps } from './Types';

import Button from '@/Common/Button';

import add from '@/Assets/plus.svg';
import minus from '@/Assets/minus.svg';

import style from './CardCartQuantity.module.css';

const CardCartQuantity = ({ check, quantity, data }: CardCartDataProps) => {
    const { handelClick, handleAdd, handleDecrease, handleRemove } = useFunctions(quantity, data);

    return (
        <div>
            {
                check && (
                    <div onClick={(event) => handelClick(event)}>
                        <div className={style.cart46CartQuantity}>
                            <Image src={add} alt='add more quantity' onClick={() => handleAdd()} />
                            <h5>Count: {quantity}</h5>
                            <Image src={minus} alt='reduce quantity' onClick={() => handleDecrease()} />
                        </div>

                        <Button value='Remove Item' className='' func={() => handleRemove()} />
                    </div>
                )
            }
        </div>
    )
}

export default CardCartQuantity;
