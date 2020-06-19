import React from 'react';
import Style from   './style';

export const Paragraph = (props) => {
  return(
    <Style>
      {props.text}
    </Style>
  );
}

export default Paragraph