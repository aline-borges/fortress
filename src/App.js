import React, { useState } from 'react';
import Global from './assets/styles/GlobalStyle';
import Home from './pages/Home';
import Form from './pages/Form';
import Result from './pages/Result';
import Button from './components/buttons/Button';
import Row from  './components/container/Row/Row';

const App = () => {
  const [showPage, setShowPage] = useState(1);

  return (
    <>
      {showPage === 1 && (<Home><Button text='Começar' onClick={() => setShowPage(2)} /></Home>)}  
      {showPage === 2 && (<Form><Button text='Enviar' onClick={() => setShowPage(3)} /></Form>)}
      {showPage === 3 && (<Result><Row><Button text='voltar' onClick={() => setShowPage(2)} /><Button text='Página inicial' onClick={() => setShowPage(1)} /></Row></Result>)}
      <Global />
    </>
  );
}

export default App;
