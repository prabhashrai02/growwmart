import Card from '@/Common/Card';
import { RootState } from '@/Store/store';
import Link from 'next/link';
import React, { ReactNode } from 'react'
import { useSelector } from 'react-redux';
import style from './WishList.module.css';
import WishListEmpty from '../WishListEmpty';

const WishList = () => {
    const wishList = useSelector((state: RootState) => state.wish.wishList);
    const wishListSize = wishList.length;
    return (
        <div className={style.cart34Box}>
            {
                wishListSize && <h3>Wishlist</h3>
            }
            {
                wishListSize ?
                    wishList.map((item, index): ReactNode => {
                        return (
                            <div className={style.cart56WishList} key={index}>
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
    )
}

export default WishList;
