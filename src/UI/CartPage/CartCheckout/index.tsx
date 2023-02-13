import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/Store/store';

import Button from '@/Common/Button';

import style from './CartCheckout.module.css';

const CartCheckout = () => {
    const cart = useSelector((state: RootState) => state.cart);
    const cartProducts = useSelector((state: RootState) => state.cart.cartProducts);
    const totalPrice = cart.totalCost.toFixed(2);
    const cartSize = cartProducts.length;

    return (
        <div className={style.cart90Price}>
            {
                cartSize ?
                    <h3>Items: &nbsp; {cartSize}</h3>
                    :
                    <></>
            }
            <h3>Total: &nbsp; {totalPrice}</h3>
            <Button value={'Checkout'} className={style.cart23CheckoutButton} />
        </div>
    )
}

export default CartCheckout;
