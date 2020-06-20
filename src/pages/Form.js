import React from 'react';
import Container from '../components/container/Column/Container';
import Row from '../components/container/Row/Row';
import Header from '../components/header/Header';
import Label from '../components/label/Label';
import Input from '../components/input/Input';

export const Form = (props) => {
  return(
    <Container>
      <Header />
      <Row>
        <Label text='Senha' />
        <Input value={props.password} />
      </Row>
      {props.children}
    </Container>
  )
}

export default Form