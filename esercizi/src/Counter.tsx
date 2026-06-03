import { CounterDisplay } from "./count";
import { useState } from "react";
export function Counter({ vIniziale, incremento }) {
    const [count, setCount] = useState(vIniziale)
    return (
        <div >
   <CounterDisplay
                count={count} />
            <button onClick={() => setCount(count + incremento)}>+ </button>
            <button onClick={() => setCount(count - incremento)}>-</button>
            <button onClick={() => setCount(vIniziale)}>RESET</button>
        </div>)}
         
