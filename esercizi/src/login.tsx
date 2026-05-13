import { useState } from "react"

export function Login({ onLogin }) {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [remember, setRemember] = useState(false)

  function handleLogin() {
    onLogin({
      username,
      password,
      remember
    })
  }

  function handleReset() {
    setUsername("")
    setPassword("")
    setRemember(false)
  }

  return (
    <div>

      <input
        type="text"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value)
        }}
      />

      <input
        type="password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value)
        }}
      />

      <label>

        <input
          type="checkbox"
          checked={remember}
          onChange={(event) => {
            setRemember(event.target.checked)
          }}
        />

        Remember
      </label>

      <button
        disabled={!username || !password}
        onClick={handleLogin}
      >
        Login
      </button>

      <button onClick={handleReset}>
        Reset
      </button>

    </div>
  )
}