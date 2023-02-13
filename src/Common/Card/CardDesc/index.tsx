import React from 'react';

import { CardDescProps } from './Types';

import style from './CardDesc.module.css';

const CardDesc = (props: CardDescProps) => {
    const { showDescription, description } = props;

    return (
        <div>

            {
                showDescription && (
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
