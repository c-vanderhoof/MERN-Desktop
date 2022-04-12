import React from 'react';



const PersonCard = (props) => {
    const { personcard } = props;
    const {firstName, lastName, age, hairColor} = personcard;
    return ( 
        <div>
            <h1>{ lastName },{firstName }</h1>
            <p>Age:{age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>
        
    );
};

export default PersonCard;
