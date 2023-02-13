import React from 'react';

import CartCheckout from './CartCheckout';
import CartList from './CartList';
import WishList from './WishList';

import style from './CartPage.module.css';

const CartPage = () => {

    return (
        <div className={style.cart98CartPage}>
            <div className={style.cart98CartChekout}>
                <CartCheckout />
            </div>
            <div className={style.cart90CartWishlist}>
                <CartList />
                <WishList />
            </div>
        </div>
    )
}

export default CartPage;
