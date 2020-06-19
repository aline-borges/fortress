import React from 'react';
import Style from './style';

export const Title = (props) => {
  return(
    <Style>
      {props.text}
    </Style>
  );
}

export default Title