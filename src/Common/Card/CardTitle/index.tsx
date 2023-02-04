import { TitleProps } from './Types';
import React from 'react';
import Ellipsis from '../../Ellipsis';
import style from './CardTitle.module.css';

const CardTitle = (props: TitleProps) => {
    const check = props.check;
    const title = props.title;

    return (
        <div className={style.card45CardTitle}>
            {
                check ? (

                    <h1> {title} </h1>
                )
                    :
                    (
                        <h3><Ellipsis text={title} size={35} /></h3>
                    )
            }

        </div>
    )
}

export default CardTitle;
