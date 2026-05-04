import { useState,  } from "react";
import  Card  from "./card";

export function ListaPokemon (){
    const [pokemonList, setPokemonList]= useState([])
   function click(){
        fetch (`https://pokeapi.co/api/v2/pokemon?limit=30&offset=0`)
        .then(response => response.json())
        .then(data => data.results.forEach(element => {
      fetch(element.url )
      .then(response => response.json())
      .then(data => setPokemonList(prev => [...prev,data])
      .catch((error)=>console.error(error))
)
            
        } ))
        .catch((error)=>console.error(error))

     }
     return (
        <div>
           
            <button onClick={click}>Carica Pokemon</button>
                  {pokemonList.map((pokemon)=><Card nome={pokemon.name} immagine={pokemon.sprites.front_default}tipo={pokemon.types}abilita={pokemon.abilities}></Card>)}
        </div>
     )

}