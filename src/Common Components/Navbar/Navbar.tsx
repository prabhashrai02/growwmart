import React from 'react'
import style from './Navbar.module.css';

const Navbar = () => {
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
        <p className={style.navbar75CartItems}>190</p>
      <img className={style.navbar90Cart} src="https://img.icons8.com/ios/50/null/shopping-cart--v1.png" alt='Cart'/>
      <h4>Cart</h4>
      </div>

    </div>
  )


  
}

export default Navbar;
