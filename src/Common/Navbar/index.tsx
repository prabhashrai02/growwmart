import React, { useEffect, useState } from 'react';

import style from './Navbar.module.css';

import Link from 'next/link';
import { useLocalData } from '@/utils/customHooks';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/Store/store';
import { updateSearchValue } from '@/Store/slices/productSlice';

const Navbar = () => {

  const { cartSize } = useLocalData();

  const searchQuery = useSelector((state: RootState) => state.product.searchValue);
  const dispatch = useDispatch();

  const { query } = useRouter();

  useEffect(() => {
    query.value && setSearchValue(query.value.toString());
  }, [query, searchQuery])
  
  const [searchValue, setSearchValue] = useState<string>(searchQuery);

  const cartURL = `../cart`;

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  }
  
  useEffect(() => {
    dispatch(updateSearchValue(searchValue));
  }, [searchValue])

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
