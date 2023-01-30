import { ButtonProps } from '@/utils/Types';
import React from 'react'

const Button = (props: ButtonProps) => {
    const value = props.value;
    const className = `${props.className}`;
    const func = props.func ? props.func : () => {};

  return <button className={className} onClick={func}> {value} </button>
}

export default Button;
