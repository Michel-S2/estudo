import './App.css';
import { ListRender } from './components/ListRender';
import { ManageData } from './components/ManageData';
import { ShowUserName } from './components/ShowUserName';
import { CarDetails } from './components/CarDetails';
import { Fragment } from './components/Fragment';
import { Container } from './components/Container';
import { FunctionEvent } from './components/FunctionEvent';
import { useState } from 'react';
import { Message } from './components/Message';
import { TrocaMessage } from './components/TrocaMessage';
import { UserDetails } from './components/UserDetails';
import { Timer } from './components/Timer';

function App() {
  

  return (
    <div className="App">
      <CarDetails/>
    </div>
  );
}

export default App;
