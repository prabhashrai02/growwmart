import React from 'react';
import Image from 'next/image';

import { CardSaleProps } from './Types';

import sale from '@/Assets/sale.svg';

import style from './CardSale.module.css';

const CardSale = ({ price } : CardSaleProps) => {

  const saleStyle = price < 100 ? `${style.card21ShowSale}` : ``;

    return (
        <div className={style.card90Sale}>
            <Image src={sale} alt='sale' className={`${saleStyle}`} />
        </div>
    )
}

export default CardSale;
