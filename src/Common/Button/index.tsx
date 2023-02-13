import React from 'react';

import { ButtonProps } from './Types';

const Button = ({ value, className, type, func }: ButtonProps) => {

  return <button className={className} type={type} onClick={func}> {value} </button>
}

export default Button;
