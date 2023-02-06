import { updateWishList } from '@/Store/slices/wishSlice';
import React from 'react'
import { useDispatch } from 'react-redux';
import style from './CardBookmark.module.css';
import { CardBookmarkProps } from './Types';

import bookmark from '@/Assets/bookmark.svg';
import Image from 'next/image';

const CardBookmark = (props: CardBookmarkProps) => {
    const data = props.data;
    const dispatch = useDispatch();

    const bookmarked = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault();

        dispatch(updateWishList(data));
    }

  return (
    <div className={style.card87Bookmark}>
      <Image src={bookmark} alt='bookmark' onClick={(event) => bookmarked(event)} />
    </div>
  )
}

export default CardBookmark;
