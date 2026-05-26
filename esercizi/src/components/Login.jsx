import { useState } from 'react';
import {bro}

export function Login() {
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || [])
    const [user, setUser] = useState({
        email: '',
        password: '',
    })
    const [error, setError] = useState(null)
    const [message, setMessage] = useState(null)
    function handleChange(event) {

        const { name, value } = event.target

        setUser((prev) => ({ ...prev, [name]: value }))
    }
    function handleLogin(event) {
        event.preventDefault()
        const userExist = users.find((u) => u.email === user.email && u.password === user.password)
        if (userExist) {
            setMessage("Credenziali corrette")
            setError(null)
            localStorage.setItem("isLoggedIn", true)
        } else {
            setMessage(null)
            setError("Credenziali errate")
            localStorage.setItem("isLoggedIn", false)

        }
    }
    return (
        <><form onSubmit={handleLogin}>
            <input type="email" name="email" onChange={handleChange} placeholder="Inserisci la tua email" />
            <input type="password" name="password" onChange={handleChange} placeholder="Inserisci la tua password" />
            <button type="submit">Login</button>
            </form>
            {error && <p>{error}</p>}
            { message && <p>{message}</p>}
        </>
    )

}