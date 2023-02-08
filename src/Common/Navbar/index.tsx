import React from 'react';

import style from './Navbar.module.css';

import Link from 'next/link';
import { useLocalData } from '@/utils/customLocalSyncHook';
import { useNavbar } from './customNavbarHooks';
import Image from 'next/image';

import search from '@/Assets/search.svg';

const Navbar = () => {

  const { cartSize } = useLocalData();
  const { searchValue, cartURL, handleChangeInput } = useNavbar();

  return (
    <div className={style.navbar32Bar}>
      <Link href='../allproducts'>
        <div className={style.navbar45Left}>
          <img src='https://groww.in/logo-groww270.png' alt='logo' />
          <p className={style.navbar23Heading}>GrowwMart</p>
        </div>
      </Link>

      <div className={style.navbar98Center}>
        <input type='text' className={style.navbar85Input} value={searchValue} placeholder='Search for any Product' onChange={(event) => handleChangeInput(event)} />
        <Image src={search} alt='search' />
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
