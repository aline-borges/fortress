import React from 'react';
import Container from '../components/container/Column/Container';
import Header from '../components/header/Header';
import Image from '../components/image/Image';
import BoxResult from '../components/result/BoxResult';

export const Result = (props) => {
  return(
    <Container>
      <Header />
      <Image />
      <BoxResult />
      {props.children}
    </Container>
  )
}

export default Result