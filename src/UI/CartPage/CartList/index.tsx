import Card from '@/Common/Card';
import { RootState } from '@/Store/store';
import Link from 'next/link';
import React, { ReactNode } from 'react'
import { useSelector } from 'react-redux';
import style from './CartList.module.css';
import CartEmpty from '../CartEmpty';

const CartList = () => {

  const cart = useSelector((state: RootState) => state.cart);
  const cartProduct = cart.cartProducts;
  const cartSize = cart.cartProducts.length;

  return (

    <div className={style.cart34Box}>
      {
        cartSize && <h3>Cart</h3>
      }
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
