import React from 'react'
import { CardProductOfferProps } from './Types';
import offer from '@/Assets/offer.png';
import style from './CardProductOffers.module.css';
import Image from 'next/image';

const CardProductOffers = (props: CardProductOfferProps) => {
  const showData = props.check;

  return (
    <div>
      {
        showData &&
        <div className={style.offer23OfferCard}>
          <div className={style.offer09OfferHead}>
          <Image src={offer} alt='offer'/>
          <h2 className={style.offer12Text}> Available Offers </h2>
            </div>
          <div className={style.offer45BreakLine} />
            <div>
              <p>
                Valentine's Sale 3rd-15th Feb: 25% off on orders ₹1099+.
              </p>
          </div>
              <h3 className={style.offer54Coupon}>
                Use code - FLAT25
              </h3>
          <div className={style.offer45BreakLine} />

          <h4>
            Easy Replacement
          </h4>

          <div className={style.offer45BreakLine} />
          <h4>
            Free Fast Shipping
          </h4>
          <div className={style.offer45BreakLine} />

          <h4>
            2,00,000+ Happy Customers
          </h4>

        </div>
      }
    </div>
  )
}

export default CardProductOffers;
