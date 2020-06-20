import React from 'react';
import Container from '../components/container/Column/Container';
import Row from '../components/container/Row/Row';
import Header from '../components/header/Header';
import Label from '../components/label/Label';
import Input from '../components/input/Input';
import Button from '../components/buttons/Button';

export const Form = () => {
  return(
    <Container>
      <Header />
      <Row>
        <Label text='Senha' />
        <Input />
      </Row>
      <Button text='Enviar' />
    </Container>
  )
}

export default Form