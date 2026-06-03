import { useState } from 'react'
 import { Welcome } from './Welcome'
 import './index.css'
import { Counter } from './Counter'
import { CounterDisplay } from './count'
import { Login } from './login'
import { Clock } from './Clock'
import {LoginF} from './uncLogin';
import { FocusableInput } from './focus'

 function App() {


  return (
    <>
    <div>
      {/* <Welcome></Welcome>
      <Login></Login>
      <CounterDisplay></CounterDisplay>
      <Counter></Counter>
      <Clock></Clock>
      <LoginF></LoginF> */}
      <FocusableInput></FocusableInput>
    </div>

    </>
  )
}
export default App


