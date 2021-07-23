import './App.css';
import UserForm from './form';
import React,{useState} from 'react';
import IndividualUser from './IndividualUser';
import styled from 'styled-components'

const WebsiteDiv = styled.div`
    text-align: center;
    background-color: ${props=>props.theme.headerColor};
    color: ${props=>props.theme.primaryColor};
    padding-top:1em;
    padding-bottom:1em;
    margin:.3em;
    border: .8em ridge ${props=>props.theme.tertiaryColor};
`


function App() {
  const [team, setTeam] = useState([])
  const addToTeam = (newUser) =>{
    setTeam([...team, newUser])
  }

  return (

    <WebsiteDiv className="App">
      <UserForm addToTeam={addToTeam}/>
      {team.map((member)=>{
        return <IndividualUser IndividualUser={member}/>
      })}
    </WebsiteDiv>
  );
}

export default App;
