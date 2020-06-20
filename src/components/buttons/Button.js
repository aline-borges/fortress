import React from 'react';
import Style from './style';

export const Button = (props, onClick) => {
  return(
    <Style onClick={onClick}>
      {props.text}
    </Style>
  );
}

export default Button
