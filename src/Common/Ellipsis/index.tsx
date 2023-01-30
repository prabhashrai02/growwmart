import React from 'react';

import { EllipsisProps } from '@/utils/Types';

import style from './Ellipsis.module.css';

const Ellipsis = (props: EllipsisProps) => {
  const tooltipStyle = { fontWeight: 100 }

  const trimSize = props.size ? props.size : 20;

  const oldText = props.text;
  const newText = props.text.slice(0, trimSize);

  const showText = oldText.length < trimSize ? oldText : newText + "...";

  return (
    <div className={style.ellipsis32Tooltip}>
      <p>{showText}</p>
      <span className={style.ellipsis90TooltipText} style={tooltipStyle}>{oldText}</span>
    </div>
  )
}

export default Ellipsis;
