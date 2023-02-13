import React from 'react';
import Image from 'next/image';

import { decode } from 'blurhash';
import { getImgFromArr } from 'array-to-image';

import { capitalizeFirstChar } from '@/utils/functions';
import { CardProps } from './Types';

import CardTitle from './CardTitle';
import CardButtons from './CardButtons';
import CardRating from './CardRating';
import CardDesc from './CardDesc';
import CardBookmark from './CardBookmark';
import CardProductOffers from './CardProductOffers';
import CardCartQuantity from './CardCartQuantity';
import CardWishListButton from './CardWishListButton';
import CardPrice from './CardPrice';
import CardSale from './CardSale';

import style from './Card.module.css';

const Card = (props: CardProps) => {
    const { data, cartPage, productPage, quantity, showDescription, wishList } = props;
    const category = data?.category && capitalizeFirstChar(data?.category);
    const showCartData = cartPage && !wishList;

    const imageURL = `${data?.image}`;

    const modifyCardProductStyle = productPage ? `${style.card75Product}` : cartPage ? `${style.card77Product}` : "";
    const modifyCardAlignment = productPage ? `${style.card45ProductDetails}` : cartPage ? `${style.card44ProductDetails}` : "";
    const cardProductWithButton = productPage ? `${style.card12ProductImageButtons}` : "";
    const modifyProductDetail = productPage ? `${style.card67ProductDescription}` : cartPage ? `${style.card67ProductDescription}` : "";

    const pixels = decode(`${data?.blurhash}`, 32, 32)
    const image = getImgFromArr(pixels, 32, 32)
    const src = image.src;

    return (
        <div className={`${style.card54Product} ${modifyCardProductStyle}`}> {
            data && (
                <div className={`${style.card23ProductDetails} ${modifyCardAlignment}`}>
                    <div className={style.card12SaleBookmark}>
                        <CardBookmark data={data} />
                        <CardSale data={data} />
                        <div className={`${style.card89ImageHolder} ${cardProductWithButton}`}>
                            <Image src={imageURL} alt={data.title} placeholder="blur" blurDataURL={src} unoptimized={true} width={100} height={100} />
                            <CardButtons check={productPage} data={data} />
                        </div>
                    </div>

                    <div className={`${style.card23ProductDescription} ${modifyProductDetail}`}>
                        <CardTitle productPage={productPage} cartPage={cartPage} title={data.title} />
                        <p>{category}</p>
                        <div className={style.card98ProductPriceRating}>
                            <CardPrice data={data} />
                            <CardRating data={data.rating} />
                        </div>
                        <CardDesc check={showDescription} data={data.description} />
                        <CardProductOffers check={productPage} />
                        <CardCartQuantity check={showCartData} quantity={quantity} data={data} />
                        <CardWishListButton check={wishList} data={data} />
                    </div>

                </div>
            )
        }
        </div>
    )
}

export default Card;
