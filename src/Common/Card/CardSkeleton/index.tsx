import React from 'react';

import { CardSkeletonProps } from './Types';

import style from './CardSkeleton.module.css';

const CardSkeleton = ({ productPage }: CardSkeletonProps) => {

  return (
    <div>
      {
        productPage ? (
          <div className={style.skeleton34Product}>
            <div>
              <div className={style.skeleton34ImageSection}>
                <span className={`${style.skeleton_loader_background} ${style.skeleton22Image}`}></span>
                <span className={`${style.skeleton_loader_background} ${style.skeleton12Small}`}></span>
                <div className={style.skeleton34cardButtons}>
                  <span className={`${style.skeleton_loader_background} ${style.skeleton12Small}`}></span>
                  <span className={`${style.skeleton_loader_background} ${style.skeleton12Small}`}></span>
                </div>
              </div>
            </div>

            <div className={`${style.skeleton23ProductDescription}`}>
              <span className={`${style.skeleton_loader_background} ${style.skeleton42Header}`}></span>
              <span className={`${style.skeleton_loader_background} ${style.skeleton42Header}`}></span>
              <span className={`${style.skeleton_loader_background} ${style.skeleton12Small}`}></span>
              <div className={style.card98ProductPriceRating}>
                <span className={style.skeleton_loader_background}></span>
              </div>
              <span className={`${style.skeleton_loader_background} ${style.skeleton21Offer}`}></span>
            </div>
          </div>
        )
          :
          (
            <div className={style.card23Skeleton}>
              <span className={`${style.skeleton_loader_background} ${style.skeleton23Image}`}></span>
              <span className={style.skeleton_loader_background}></span>
              <span className={style.skeleton_loader_background}></span>
              <span className={style.skeleton_loader_background}></span>
            </div>
          )
      }
    </div>
  )
}

export default CardSkeleton;
