import { useState } from 'react'

import { InteractiveWelcome } from './intWelcome'
import { Login } from './login'

function App() {
  const [count, setCount] = useState(0)

  return (
    < >
    <Login onLogin={(data) => console.log(data)} />
     <InteractiveWelcome></InteractiveWelcome>
    </>
  )
}

export default App
