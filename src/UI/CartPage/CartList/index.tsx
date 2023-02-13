import React, { ReactNode } from 'react'
import Link from 'next/link';
import { useSelector } from 'react-redux';

import { RootState } from '@/Store/store';

import Card from '@/Common/Card';
import CartEmpty from '../CartEmpty';

import style from './CartList.module.css';

const CartList = () => {

  const cart = useSelector((state: RootState) => state.cart);
  const cartProduct = cart.cartProducts;
  const cartSize = cart.cartProducts.length;

  return (

    <div className={style.cart34Box}>
      <div className={style.cart12Head}>
        <h3>Cart</h3>
      </div>
      {
        cartSize ?
          cartProduct.map((item, index): ReactNode => {
            return (
              <div className={style.cart43CartItems} key={index}>
                <Link href={`../product/${item.product?.id}`}>
                  <Card cartPage={true} data={item.product} quantity={item.quantity} key={index} />
                </Link>
              </div>
            )
          })
          :
          <CartEmpty />
      }
    </div>
  )
}

export default CartList;
