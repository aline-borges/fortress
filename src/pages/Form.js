import React from 'react';
import Container from '../components/container/Container';
import Header from '../components/header/Header';
import Label from '../components/label/Label';
import Input from '../components/input/Input';
import Button from '../components/buttons/Button';

export const Form = () => {
  return(
    <Container>
      <Header />
      <Label text='Senha' />
      <Input />
      <Button text='Enviar' />
    </Container>
  )
}

export default Form