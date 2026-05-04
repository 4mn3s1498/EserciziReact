import { CounterDisplay } from "./CounterDisplay";
import { useState } from "react";
import { useEffect } from "react";

export function Counter({vIniziale, incremento} ){
    const [count, setCount]= useState(vIniziale)
    useEffect(() => {
  console.log(count);
}, [count]);
    return (
        <div>
             <CounterDisplay count={count} />
                <button onClick={()=>setCount(count + incremento)}>+
                </button>
               <button onClick={()=>setCount(count- incremento)}>-</button>
               <button onClick={()=>setCount(vIniziale)}>RESET</button>
               

        </div>
    )
}
//domanda 2: sarebbe meglio utilizzare una funzione perchè rende il codice riutilizzabile.

