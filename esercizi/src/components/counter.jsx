
// Crea un componente funzione Counter e crea una nuova variabile di stato chiamata
//  counter inizializzata a 0. Il componente Counter dovrebbe renderizzare il valore 
//  di counter all'interno di un tag h2, e il valore di counter dovrebbe essere incrementato 
//  di 1 ogni volta che l'utente clicca su un pulsante. Suggerimento: usa l'hook useState;
// Quando si chiama la funzione "setter" per incrementare il contatore, il parametro dovrebbe
//  essere una funzione o un valore immediato? Perché? Scrivi la risposta in un commento.
// Modifica il componente Counter in modo che il valore iniziale del contatore e l'incremento
//  siano passati come props al componente;
// Estrai il tag h2 che mostra la variabile di stato counter in un nuovo componente chiamato 
// CounterDisplay e renderizzalo all'interno del componente Counter, passandogli la variabile 
// di stato count come prop;
// Aggiungi un pulsante per decrementare e un pulsante per resettare al componente Counter. 
// Il pulsante per decrementare dovrebbe decrementare il contatore della quantità passata come
//  prop, e il pulsante per resettare dovrebbe riportare il contatore al valore iniziale
//   passato come prop.

// Il tuo esercizio


import { useState } from 'react'


export function CounterDisplay({counter}){
    
return <h2>{counter}</h2>}


export function Counter() {
const [counter, setCounter] = useState (0)

function handleCounterIncrement () {
    setCounter (counter + 1)
}

  function handleDecrement() {
    setCounter(counter - 1)
 }

  function handleReset() {
    setCounter(initialValue) }
  

return (
<div>

<CounterDisplay count={counter} />
<button onClick={handleCounterIncrement}>Increment</button>
<button onClick={handleDecrement}>decrementare</button>
<button onClick={handleReset}>Reset</button>
</div> 
  )
}


{/* il parametro dovrebbe essere una funzione */}