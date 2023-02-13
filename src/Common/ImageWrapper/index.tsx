import React, { useMemo } from 'react';
import Image from 'next/image';
import { decode } from 'blurhash';
// @ts-ignore
import { getImgFromArr } from 'array-to-image';
import { ImageWrapperProps } from './Types';

const ImageWrapper = ({ imageSrc, alt, blurHash }: ImageWrapperProps) => {
  const imageURL = `${imageSrc}`;

  const getBlurURL = () => {
    const pixels = decode(blurHash, 32, 32)
    const image = getImgFromArr(pixels, 32, 32)
    const src = image.src;

    return src;
  }

  const blurImageSrc = useMemo(() => getBlurURL(), [imageSrc])


  return (
    <Image src={imageURL} alt={alt} placeholder="blur" blurDataURL={blurImageSrc} unoptimized={true} width={100} height={100} />
  )
}

export default ImageWrapper;
