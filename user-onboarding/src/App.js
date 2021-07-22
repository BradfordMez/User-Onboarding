import './App.css';
import UserForm from './form';
import React,{useState} from 'react';

function App() {
  const [team, setTeam] = useState([])
  const addToTeam = newUser =>{
    setTeam([...team, newUser])
  }

  return (

    <div className="App">
      <UserForm addToTeam={addToTeam}/>
      {}
    </div>
  );
}

export default App;
