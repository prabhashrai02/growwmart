import { ButtonProps } from '@/utils/Types';
import React from 'react'

const Button = (props: ButtonProps) => {
    const value = props.value;
    const className = `${props.className}`;

  return <button className={className}> {value} </button>
}

export default Button;
