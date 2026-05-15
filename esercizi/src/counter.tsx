import { useState, useRef, useEffect } from "react"

export function Counter({ initialValue }) {

    const [count, setCount] = useState(initialValue)

    const directionRef = useRef("")
    const previousDirection = useRef("")

    useEffect(() => {

        if (count > initialValue) {
            directionRef.current = "up"
        }

        if (count < initialValue) {
            directionRef.current = "down"
        }

        if (directionRef.current !== previousDirection.current) {

            console.log(directionRef.current)

            previousDirection.current = directionRef.current
        }

    }, [count])

    return (
        <div>

            <h1>{count}</h1>

            <button
                onClick={() => {
                    setCount(count + 1)
                }}
            >
                +
            </button>

            <button
                onClick={() => {
                    setCount(count - 1)
                }}
            >
                -
            </button>

        </div>
    )
}