import React from 'react';

import Ellipsis from '../../Ellipsis';
import { TitleProps } from './Types';

import style from './CardTitle.module.css';

const CardTitle = ({ productPage, cartPage, title }: TitleProps) => {

    return (
        <div className={style.card45CardTitle}>
            {
                (productPage) ? <h1> {title} </h1>
                    : (cartPage) ? <h4> <Ellipsis text={title} size={25} /> </h4>
                        : <h3><Ellipsis text={title} size={25} /></h3>
            }
        </div >
    )
}

export default CardTitle;
