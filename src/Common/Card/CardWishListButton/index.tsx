import Button from '@/Common/Button';
import { addToCart } from '@/Store/slices/cartSlice';
import { updateWishList } from '@/Store/slices/wishSlice';
import React from 'react'
import { useDispatch } from 'react-redux';
import style from './CardWishListButton.module.css';
import { CardWishListButtonProps } from './Types';

const CardWishListButton = (props: CardWishListButtonProps) => {
    const { check, data } = props;

    const dispatch = useDispatch();


    const preventDefault = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault();
    }
    const handleClick = () => {
        dispatch(addToCart(data));
        dispatch(updateWishList(data));
    }

  return (
    <div onClick={(event) => preventDefault(event)}>
        {
            check && <Button value={'Add to Cart'} className={style.CardWishList12Button} func={() => handleClick()} />
        }
    </div>
  )
}

export default CardWishListButton;
