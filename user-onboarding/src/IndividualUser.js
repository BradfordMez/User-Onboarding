import React from 'react'

export default function IndividualUser(props) {
    return (
        <div>
            <h2>{props.IndividualUser.name}</h2>
            <p>{props.IndividualUser.email}</p>
            <p>{props.IndividualUser.password}</p>
            <p></p>
        </div>
    )
}
