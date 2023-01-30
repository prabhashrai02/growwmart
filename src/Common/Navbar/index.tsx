import { RootState } from '../../Store/store';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import style from './Navbar.module.css';
import { getLocalData, setLocalData } from '@/utils/useLocalStorage';
import { setValue } from '@/Store/slices/counterSlice';

const Navbar = () => {
  const dispatch = useDispatch();

  const cartSize = useSelector((state: RootState) => state.cartSize.value);
  const localCart =  getLocalData("cartSize");

  useEffect(() => {
    localCart ? dispatch(setValue(Number(localCart))) :
    setLocalData<number>("cartSize", cartSize)
  }, []);
  
  useEffect(() => {
    setLocalData<number>("cartSize", cartSize)
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
