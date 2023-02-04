import React from 'react';
import { CardDescProps } from './Types';
import style from './CardDesc.module.css';

const CardDesc = (props: CardDescProps) => {
    const productPage = props.check;
    const description = props.data;

    return (
        <div>

            {
                productPage && (
                    <div className={style.cardDesc90Para}>
                        <br></br>
                        <p>{description}</p>
                        <br></br>
                    </div>
                )
            }

        </div>
    )
}

export default CardDesc;
