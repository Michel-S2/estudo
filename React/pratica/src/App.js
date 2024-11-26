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
import { MyForm } from './components/MyForm';

function App() {
  

  return (
    <div className="App">
      <MyForm user={{name: '', email: '', sobre: 'Aqui você digitará um breve resumo sobre você', conta: 'user'}}/>
    </div>
  );
}

export default App;
