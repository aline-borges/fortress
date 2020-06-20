import React from 'react';
import Style from './style';

export const Button = (props) => {
  return(
    <Style onClick={props.onClick}>
      {props.text}
    </Style>
  );
}

export default Button
