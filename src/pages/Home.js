import React from 'react';
import Container from '../components/container/Column/Container';
import Header from '../components/header/Header';
import Paragraph from '../components/texts/paragraph/Paragraph';

export const Home = (props) => {
  return(
    <Container>
      <Header />
      <Paragraph text='Analise a força da sua senha. Entre e teste agora.' />
      <Paragraph text='Que a força esteja com você!' />
      {props.children}
    </Container>
  )
}

export default Home