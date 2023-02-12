import Card from '@/Common/Card';
import { RootState } from '@/Store/store';
import Link from 'next/link';
import React, { ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CartEmpty from './CartEmpty';
import style from './CartPage.module.css';
import WishListEmpty from './WishListEmpty';

const CartPage = () => {

    const cart = useSelector((state: RootState) => state.cart);
    const cartProduct = cart.cartProducts;
    const cartSize = cart.cartProducts.length;

    const wishList = useSelector((state: RootState) => state.wish.wishList);
    const wishListSize = wishList.length;

    return (
        <div className={style.cart98CartPage}>
            <div className={style.cart34Box}>
                {
                    cartSize ?
                        cartProduct.map((item, index): ReactNode => {
                            return (
                                <div key={index}>
                                    <Link href={`../product/${item.product?.id}`}>
                                        <Card cartPage={true} data={item.product} quantity={item.quantity} key={index} />;
                                    </Link>
                                </div>
                            )
                        })
                        :
                        <CartEmpty />
                }
            </div>
            <div className={style.cart34Box}>
                {
                    wishListSize ?
                        wishList.map((item, index): ReactNode => {
                            return (
                                <div className={style.cart56WistList} key={index}>
                                    <Link href={`../product/${item?.id}`}>
                                        <Card cartPage={true} wishList={true} data={item} key={index} />
                                    </Link>
                                </div>
                            )
                        })
                        :
                        <WishListEmpty />
                }
            </div>
        </div>
    )
}

export default CartPage;
