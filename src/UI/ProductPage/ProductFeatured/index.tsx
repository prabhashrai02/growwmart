import Image from 'next/image';
import React from 'react';

import style from './ProductFeatured.module.css';

const ProdutFeatured = () => {
  const buzzfeed = `https://cdn.shopify.com/s/files/1/1767/2123/files/media_mention_logos-01_fd720915-ee56-4131-bcf2-662f7bd7bceb.png?v=1664287593`;
  const gq = `https://cdn.shopify.com/s/files/1/1767/2123/files/media_mention_logos-03_77cd43a4-b403-402b-b577-b042b71a8b55.png?v=1664287593`;
  const vogue = `https://cdn.shopify.com/s/files/1/1767/2123/files/media_mention_logos-02_49ecfd3b-8d1b-4e11-9076-c19feb1f87fc.png?v=1664287593`;
  return (
    <div className={style.product89Featured}>
      <h2>Featured in</h2>
      <div className={style.product67allFeatured}>
        <div className={style.product45ImageHolder}>
          <Image loader={() => buzzfeed} src={buzzfeed} unoptimized={true} alt={'buzzfeed'} width={100} height={100} />
        </div>
        <div className={style.product45ImageHolder}>
          <Image loader={() => gq} src={gq} unoptimized={true} alt={'gq'} width={100} height={100} />
        </div>
        <div className={style.product45ImageHolder}>
          <Image loader={() => vogue} src={vogue} unoptimized={true} alt={'vogue'} width={100} height={100} />
        </div>
      </div>
    </div>
  )
}

export default ProdutFeatured;
