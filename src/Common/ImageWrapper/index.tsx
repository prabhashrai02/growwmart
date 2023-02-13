import React, { useMemo } from 'react';
import Image from 'next/image';
import { decode } from 'blurhash';
// @ts-ignore
import { getImgFromArr } from 'array-to-image';
import { ImageWrapperProps } from './Types';

const ImageWrapper = ({data}: ImageWrapperProps) => {
  const imageURL = `${data?.image}`;
  
  const getBlurURL = () => {
    const pixels = decode(`${data?.blurhash}`, 32, 32)
    const image = getImgFromArr(pixels, 32, 32)
    const src = image.src;
  
    return src;
  }

  const blurImageSRC = useMemo(() =>getBlurURL(), [data])
  

  return (
    <Image src={imageURL} alt={data.title} placeholder="blur" blurDataURL={blurImageSRC} unoptimized={true} width={100} height={100} />
  )
}

export default ImageWrapper;
