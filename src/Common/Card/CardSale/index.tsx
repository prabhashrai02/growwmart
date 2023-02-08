import React from 'react'
import style from './CardSale.module.css';
import Image from 'next/image';
import sale from '@/Assets/sale.svg';
import { CardSaleProps } from './Types';

const CardSale = ({data} : CardSaleProps) => {

  const saleStyle = data.price < 100 ? `${style.card21ShowSale}` : ``;

    return (
        <div className={style.card90Sale}>
            <Image src={sale} alt='sale' className={`${saleStyle}`} />
        </div>
    )
}

export default CardSale;
