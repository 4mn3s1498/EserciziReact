function Card ({nome,immagine,tipo,abilita}) {
return (<div>
    <h6>{nome}</h6>
    <img src={immagine} alt={nome}/>
    <ul>{tipo.map((x,i)=>(<li key={i}>{x.type.name}</li>))}</ul>
    <ul>{abilita.map((x,i)=>(<li key={i}>{x.ability.name} </li>))}</ul>
    </div>)
}
export default Card