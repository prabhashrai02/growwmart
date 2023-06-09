import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useLocalData } from '@/utils/customLocalSyncHook';
import { useNavbar } from './customNavbarHooks';

import cross from '@/Assets/cross.svg';
import search from '@/Assets/search.svg';

import style from './Navbar.module.css';

const Navbar = () => {

  const { cartSize } = useLocalData();
  const { searchValue, cartURL, handleChangeInput, setSearchValue } = useNavbar();

  const growwLogo = `https://groww.in/logo-groww270.png`;

  return (
    <div className={style.navbar32Bar}>
      <Link href='../allproducts'>
        <div className={style.navbar45Left}>
          <Image src={growwLogo} alt='logo' unoptimized={true} width={50} height={50} />
          <p className={style.navbar23Heading}>GrowwMart</p>
        </div>
      </Link>

      <div className={style.navbar98Center}>
        <input type='text' className={style.navbar85Input} value={searchValue} placeholder='Search' onChange={(event) => handleChangeInput(event)} />
        {
          searchValue.length ?
          <Image src={cross} alt='remove' onClick={() => setSearchValue("")} className={style.navbar41RemoveSearch} />
          :
          <Image src={search} alt='search' />
        }
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
