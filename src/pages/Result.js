import React from 'react';
import Container from '../components/container/Container';
import Header from '../components/header/Header';
import Image from '../components/image/Image';
import BoxResult from '../components/result/BoxResult';
import Button from '../components/buttons/Button';

export const Result = () => {
  return(
    <Container>
      <Header />
      <Image />
      <BoxResult />
      <Button text={'Voltar'} />
      <Button text={'Página Inicial'} />
    </Container>
  )
}

export default Result