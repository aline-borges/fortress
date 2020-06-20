import React from 'react';
import Global from './assets/styles/GlobalStyle';
import Home from './pages/Home';
import Form from './pages/Form';
import Result from './pages/Result';

function App() {
  return (
    <>
      <Home />
      <Form />
      <Result />
      <Global />
    </>
  );
}

export default App;
