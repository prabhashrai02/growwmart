import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/Store/store';

import Button from '@/Common/Button';

import style from './CartCheckout.module.css';

const CartCheckout = () => {
    const cart = useSelector((state: RootState) => state.cart);
    const cartProducts = useSelector((state: RootState) => state.cart.cartProducts);
    const totalPrice = cart.totalCost.toFixed(2);

    return (
        <div className={style.cart90Price}>
            <h3 className={style.cart80Heading}>Cart Summary</h3>
            {
                cartProducts.map((item) => {
                    return (
                        <div className={style.cart24Summary}>
                            <div>
                                <p>{item.product.title}</p>
                                <p><b>Qnt: {item.quantity}</b></p>
                            </div>
                            <p><b>&#x20b9;{(item.quantity * item.product.price).toFixed(2)}</b></p>
                        </div>
                    )
                })
            }
            <h4 className={style.cart89TotalPrice}>Total: &nbsp; &#x20b9; {totalPrice}</h4>
            <Button value={'Checkout'} className={style.cart23CheckoutButton} />
        </div>
    )
}

export default CartCheckout;
