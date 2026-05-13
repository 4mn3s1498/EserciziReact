import { useState } from "react"

function Welcome(props) {
  return <h1>Ciao {props.name}</h1>
}

export function InteractiveWelcome() {

  const [name, setName] = useState("")

  return (
    <div>

      <input
        value={name}
        onChange={(event) => {
          setName(event.target.value)
        }}
      />

      <Welcome name={name} />

    </div>
  )
}