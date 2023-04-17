import React from 'react';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Line } from './components/line/Line';

function App() {
  return (
    <div>
      <Line />

      <div className="container">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
