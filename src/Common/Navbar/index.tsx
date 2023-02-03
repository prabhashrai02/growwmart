import { RootState } from '../../Store/store';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import style from './Navbar.module.css';
import { getLocalData, setLocalData } from '@/utils/useLocalStorage';
import { setDataFromLocal } from '@/Store/slices/cartSlice';
import { setWishList } from '@/Store/slices/wishSlice';

import Link from 'next/link';
import { useLocalData } from '@/utils/customHooks';

const Navbar = () => {
  const { cartSize } = useLocalData();

  const cartURL = `../cart`;

  return (
    <div className={style.navbar32Bar}>
      <Link href='../allproducts'>
      <div className={style.navbar45Left}>
        <img src='https://groww.in/logo-groww270.png' alt='logo' />
        <p className={style.navbar23Heading}>GrowwMart</p>
      </div>
      </Link>

      <div className={style.navbar98Center}>
        <input type='text' className={style.navbar85Input} placeholder='Search for any Product' />
      </div>

      <Link href={cartURL}>
      <div className={style.navbar44Right}>
        <p className={style.navbar75CartItems}>{cartSize}</p>
        <img className={style.navbar90Cart} src="https://img.icons8.com/ios/50/null/shopping-cart--v1.png" alt='Cart' />
      </div>
      </Link>
    </div>
  )
}

export default Navbar;
