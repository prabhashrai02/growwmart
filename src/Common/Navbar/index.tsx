import { RootState } from '../../Store/store';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import style from './Navbar.module.css';
import { getLocalData, setLocalData } from '@/utils/useLocalStorage';
import { setData } from '@/Store/slices/cartSlice';
import { CartState } from '@/UI/CartPage/Types';

const Navbar = () => {
  const dispatch = useDispatch();

  const cartSize = useSelector((state: RootState) => state.cart.value);
  const cart = useSelector((state: RootState) => state.cart);
  
  const localCartData = getLocalData("cartState");

  useEffect(() => {
    localCartData ? dispatch(setData(JSON.parse(localCartData))) :
    setLocalData<CartState>("cartState", cart)
  }, []);
  
  useEffect(() => {
    setLocalData<CartState>("cartState", cart)
  }, [cartSize])

  return (
    <div className={style.navbar32Bar}>

      <div className={style.navbar45Left}>
        <img src='https://groww.in/logo-groww270.png' alt='logo' />
        <p className={style.navbar23Heading}>GrowwMart</p>
      </div>

      <div className={style.navbar98Center}>
        <input type='text' className={style.navbar85Input} placeholder='Search for any Product' />
      </div>


      <div className={style.navbar44Right}>
        <p className={style.navbar75CartItems}>{cartSize}</p>
        <img className={style.navbar90Cart} src="https://img.icons8.com/ios/50/null/shopping-cart--v1.png" alt='Cart' />
      </div>

    </div>
  )
}

export default Navbar;
