import React from 'react';
import { useDispatch } from 'react-redux';

import { useWishButtons } from './useWishButtons';
import { CardWishListButtonProps } from './Types';

import Button from '@/Common/Button';

import style from './CardWishListButton.module.css';

const CardWishListButton = ({ check, data }: CardWishListButtonProps) => {

    const { preventDefault, handleClick } = useWishButtons(data);

    return (
        <div onClick={(event) => preventDefault(event)}>
            {
                check && <Button value={'Add to Cart'} className={style.CardWishList12Button} func={() => handleClick()} />
            }
        </div>
    )
}

export default CardWishListButton;
