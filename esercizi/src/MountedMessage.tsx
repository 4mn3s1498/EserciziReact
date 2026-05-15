import { useRef, useEffect } from "react"

export function MountedMessage() {

    const mountedRef = useRef(false)

    useEffect(() => {

        if (!mountedRef.current) {

            console.log("buongiorno")

            mountedRef.current = true
        }

    }, [])

    return (
        <>
        </>
    )
}