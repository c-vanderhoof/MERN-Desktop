import React, { useState } from 'react';



const PersonCard = (props) => {
    const { personcard } = props;
    const {firstName, lastName, age, hairColor} = personcard;
    const [stateAge,setStateAge] = useState(age);
    return ( 
        <div>
            <h1>{ lastName },{firstName }</h1>
            <p>Age:{stateAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={()=> setStateAge(stateAge + 1)}>It's My Birthday!!</button>
        </div>
        
    );
}

export default PersonCard;
