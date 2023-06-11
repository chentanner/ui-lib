import React, { FC } from 'react';
import './Button.css';

interface ButtonProps {
  label: string;
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button>{props.label}</button>
  );
}

export default Button;
