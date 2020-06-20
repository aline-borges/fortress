import React from 'react';
import Container from '../components/container/Column/Container';
import Header from '../components/header/Header';
import Paragraph from '../components/texts/paragraph/Paragraph';
import Button from '../components/buttons/Button';

export const Home = () => {
  return(
    <Container>
      <Header />
      <Paragraph text='Analise a força da sua senha. Entre e teste agora.' />
      <Paragraph text='Que a força esteja com você!' />
      <Button text='Começar' />
    </Container>
  )
}

export default Home