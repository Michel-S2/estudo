import { useState } from 'react';
import './App.css';
import { ListRender } from './components/ListRender';
import { ManageData } from './components/ManageData';
import { ShowUserName } from './components/ShowUserName';
import { CarDetails } from './components/CarDetails';

function App() {
  const [userName] = useState('Maria')
  return (
    <div className="App">
      <ShowUserName name={userName}/>
      <CarDetails modelo='Palio' km={120000} ano={2008}/>
    </div>
  );
}

export default App;
