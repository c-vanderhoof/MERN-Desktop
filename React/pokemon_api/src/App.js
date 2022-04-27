import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]);


  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => { setPokemon(response.results) })
  },[]);
    return (
      <div>
        <ul>
          {
            pokemon.map((pokemonObj, index) => {
              return (<li key={index}>{pokemonObj.name}</li>)
            })
          }
        </ul>
      </div>
    )
  }



export default App;
