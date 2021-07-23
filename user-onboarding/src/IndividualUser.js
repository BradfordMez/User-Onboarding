import React from 'react'
import styled from 'styled-components'



const StyledH2 = styled.h2`
    background-color: ${props => props.theme.backgroundColor};
    margin-left: 18em;
    margin-right:18em;
    padding-top:.5em;
    padding-bottom:.5em;
    border: .4em double ${props=>props.theme.tertiaryColor};
    border-radius: 1em;
    color: ${props => props.theme.primaryColor};
    font-size: 2em;
`
const StyledInfo=styled.p`
  background-color: ${props=>props.theme.secondaryColor};
  padding-right:2rem;
  padding-left:2rem;
  padding-top:1rem;
  padding-bottom:1rem;
  margin-left:2rem;
  margin-right:2rem;
  border: 1em double ${props=>props.theme.tertiaryColor};
  border-radius:1em;
  font-size:.6em;
`


export default function IndividualUser(props) {
    return (
        <div>
            <StyledH2>{props.IndividualUser.name}
            <StyledInfo>Email: {props.IndividualUser.email}</StyledInfo>
            <StyledInfo>Password: {props.IndividualUser.password}</StyledInfo></StyledH2>
        </div>
    )
}
