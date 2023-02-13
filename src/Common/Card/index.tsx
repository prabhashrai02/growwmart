import React from 'react';

import { getModifiedClasses } from './function';
import { CardProps, GetModifiedClassesProps } from './Types';

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

    const cardDetails: GetModifiedClassesProps = {
        data: data,
        productPage: productPage,
        cartPage: cartPage,
        wishList: wishList
    }

    const { ImageWrapper, category, showCartData, modifyCardProductStyle,
        modifyCardAlignment, cardProductWithButton, modifyProductDetail } = getModifiedClasses(cardDetails);

    return (
        <div className={`${style.card54Product} ${modifyCardProductStyle}`}> {
            data && (
                <div className={`${style.card23ProductDetails} ${modifyCardAlignment}`}>
                    <div className={style.card12SaleBookmark}>
                        <CardBookmark data={data} />
                        <CardSale price={data.price} />
                        <div className={`${style.card89ImageHolder} ${cardProductWithButton}`}>
                            <ImageWrapper imageSrc={data.image} alt={data.title} blurHash={data.blurhash} />
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
                        <CardDesc showDescription={showDescription} description={data.description} />
                        <CardProductOffers showData={productPage} />
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
