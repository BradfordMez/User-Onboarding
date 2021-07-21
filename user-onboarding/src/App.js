import logo from './logo.svg';
import './App.css';
import Form from './form';
import React,{useState} from 'react';

function App() {
  const [team, setTeam] = useState([])
  const addToTeam = newUser =>{
    setTeam([...team, newUser])
  }

  return (

    <div className="App">
      <Form addToTeam={addToTeam}/>
    </div>
  );
}

export default App;
