import React, { ReactNode } from 'react'
import { useSelector } from 'react-redux';
import Link from 'next/link';

import { RootState } from '@/Store/store';

import Card from '@/Common/Card';
import WishListEmpty from '../WishListEmpty';

import style from './WishList.module.css';

const WishList = () => {
    const wishList = useSelector((state: RootState) => state.wish.wishList);
    const wishListSize = wishList.length;
    return (
        <div className={style.cart34Box}>
            {
                wishListSize ?
                    wishList.map((item, index): ReactNode => {
                        return (
                            <div className={style.cart56WishList} key={index}>
                                <Link href={`../product/${item.id}`}>
                                    <Card cartPage={true} wishList={true} data={item} key={index} productPage={false} quantity={0} showDescription={false} />
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
