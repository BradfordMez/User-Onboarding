import './App.css';
import UserForm from './form';
import React,{useState} from 'react';
import IndividualUser from './IndividualUser';

function App() {
  const [team, setTeam] = useState([])
  const addToTeam = (newUser) =>{
    setTeam([...team, newUser])
  }

  return (

    <div className="App">
      <UserForm addToTeam={addToTeam}/>
      {team.map((member)=>{
        return <IndividualUser IndividualUser={member}/>
      })}
    </div>
  );
}

export default App;
