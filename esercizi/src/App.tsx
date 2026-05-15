import { useState } from 'react'
import { FocusableInput } from './Focus'
import { MountedMessage } from './MountedMessage'
import { Counter } from './counter'


function App() {
  const [count, setCount] = useState(0)

  return (
    < >
    <FocusableInput />
    <MountedMessage></MountedMessage>
  <Counter initialValue={0} />

    </>
  )
}

export default App
