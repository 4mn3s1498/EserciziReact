import { useRef, useEffect } from "react"

export function FocusableInput() {

    const inputRef = useRef(null)

    useEffect(() => {

        if (inputRef.current) {
            inputRef.current.focus()
        }

    }, [])

    return (
        <div>
            <input ref={inputRef} />
        </div>
    )
}