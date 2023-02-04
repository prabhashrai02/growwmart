import React from 'react'
import { CardProductOfferProps } from './Types';
import offer from '@/Assets/offer.png';
import style from './CardProductOffers.module.css';

const CardProductOffers = (props: CardProductOfferProps) => {
  const showData = props.check;

  return (
    <div>
      {
        showData &&
        <div className={style.offer23OfferCard}>
          <h2 className={style.offer12Text}> Available Offers </h2>
          <div className={style.offer45BreakLine} />
          <div className={style.offer12Icon}>
            <img src={offer.src} />
            <div>
              <h3>
                Valentine's Sale 3rd-15th Feb: 25% off on orders ₹1099+.
              </h3>
            </div>
          </div>
              <h3 className={style.offer54Coupon}>
                Use code - FLAT25
              </h3>
          <div className={style.offer45BreakLine} />

          <h3>
            Easy Replacement
          </h3>

          <div className={style.offer45BreakLine} />
          <h3>
            Free Fast Shipping
          </h3>
          <div className={style.offer45BreakLine} />

          <h3>
            2,00,000+ Happy Customers
          </h3>

        </div>
      }
    </div>
  )
}

export default CardProductOffers;
