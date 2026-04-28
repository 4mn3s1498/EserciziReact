import { useState } from "react"

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
        {dati ? <div><p>{dati.name}</p> <img src={dati.sprites.front_default}></img></div> : "cerca pokemon" }
    </form>
}

export default Ricerca