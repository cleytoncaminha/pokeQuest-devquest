import { useEffect, useState } from "react";
import {getPokemons,getPokemon} from '../src/services/requestApi.js'

function App() {
  const fetchData = async ()=>{
    const data = await getPokemons()
    const urls = data.map((element)=>{
      return(
        element.url
      )
    })
    const pokemon = urls.map(async (element)=>{
     const image = await getPokemon(element)
      return( image)
    });
    console.log(pokemon)
  }
  fetchData()
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
