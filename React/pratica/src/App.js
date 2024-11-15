import './App.css';
import { ListRender } from './components/ListRender';
import { ManageData } from './components/ManageData';
import { showUserName } from './components/showUserName';

function App() {
  return (
    <div className="App">
      <ListRender></ListRender>
      <showUserName name="Michel"/>
    </div>
  );
}

export default App;
