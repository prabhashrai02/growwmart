import React, { useState } from 'react';
import Head from 'next/head';

import CartCheckout from './CartCheckout';
import CartList from './CartList';
import WishList from './WishList';
import Button from '@/Common/Button';

import style from './CartPage.module.css';

const CartPage = () => {

    const [showCart, setShowCart] = useState(true);
    const [showingCartStyle, setShowingCartStyle] = useState("");
    const [showingWishStyle, setShowingWishStyle] = useState(`${style.active56Button}`);

    const handleShowCart = () => {
        setShowCart(true);
        setShowingCartStyle("");
        setShowingWishStyle(`${style.active56Button}`);
    }

    const handleShowWishList = () => {
        setShowCart(false);
        setShowingCartStyle(`${style.active56Button}`);
        setShowingWishStyle("");
    }

    return (
        <div className={style.cart98CartPage}>
            <Head>
                <title>Cart</title>
            </Head>

            <div className={style.cart98CartChekout}>
                <CartCheckout />
            </div>
            <div className={style.cart90CartWishlist}>
                <div className={style.cart23SwitchButtons}>
                    <Button value={'Cart'} className={`${style.cart12SwitchButton} ${showingCartStyle}`} func={handleShowCart} />
                    <Button value={'WishList'} className={`${style.cart12SwitchButton} ${showingWishStyle}`} func={handleShowWishList} />
                </div>
                {
                    showCart ?
                        <CartList />
                        :
                        <WishList />
                }
            </div>
        </div>
    )
}

export default CartPage;
