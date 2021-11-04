import React from 'react';
import { Container } from './AppStyle';
import { Routes } from './routes';

function App() {
  return (
    <Container>
      <header className="App-header">
        <Routes />
      </header>
    </Container>
  );
}

export default App;
