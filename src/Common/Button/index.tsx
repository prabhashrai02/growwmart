import { ButtonProps } from './Types';
import React from 'react';

const Button = (props: ButtonProps) => {
    const value = props.value;
    const className = `${props.className}`;
    const type = props.type;
    const func = props.func ? props.func : () => {};

  return <button className={className} type={type} onClick={func}> {value} </button>
}

export default Button;
