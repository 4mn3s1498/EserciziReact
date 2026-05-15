import { useState } from "react"

export function TodoList() {

    const [items, setItems] = useState([])
    const [inputValue, setInputValue] = useState("")

    function handleAddTodo() {

        setItems([...items, inputValue])

        setInputValue("")
    }

    function handleReset() {
        setItems([])
    }

    function handleRemove(indexToRemove) {

        const newItems = items.filter((item, index) => {
            return index !== indexToRemove
        })

        setItems(newItems)
    }

    return (
        <div>

            <input
                type="text"
                value={inputValue}
                onChange={(event) => {
                    setInputValue(event.target.value)
                }}
            />

            <button onClick={handleAddTodo}>
                Add
            </button>

            <button onClick={handleReset}>
                Reset
            </button>

            <ul>

                {items.map((item, index) => (

                    <li key={index}>

                        {item}

                        <button
                            onClick={() => {
                                handleRemove(index)
                            }}
                        >
                            Remove
                        </button>

                    </li>

                ))}

            </ul>

        </div>
    )
}