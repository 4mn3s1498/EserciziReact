import { useState } from "react"
import Card from "./card"

function Ricerca(){
    const [pokemon,setPokemon] = useState(null)
    const [dati, setDati]=useState(null)
    function handleRicerca(event){
        event.preventDefault()
        fetch (`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then ((res)=>res.json())
        .then((data)=>setDati(data))
        .catch((error)=>console.error(error))
    }
    return <form onSubmit={handleRicerca}>
        <input type="text" placeholder="Scrivi il nome del pokemon" onChange={(event)=> setPokemon(event.target.value) } >
        </input>
        <button type="submit">
            Cerca
        </button>
        {dati ? (<Card nome={dati.name} immagine={dati.sprites.front_default}tipo={dati.types}abilita={dati.abilities}></Card>) :(<p>cerca pokemon</p>)  }
       
    </form>
}

export default Ricerca