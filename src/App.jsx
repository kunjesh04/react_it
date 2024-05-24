import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FunctionalComponent from "./components/FunctionalComponent"
import ClassComponent from './components/ClassComponent'
import Toggle from './components/Toggle'
import CounterDiv from './components/CounterDiv'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Toggle text='Welcome to React Stretch'>
        <p name="Luffy">Para-1</p>
        <p name="Zoro">Para-2</p>
        <p>Para-3</p>
        <p>Para-4</p>

      </Toggle>
      <ClassComponent education='Constructor' amount='25,000'/>
      <FunctionalComponent education='Doctor' age='40' />
      <FunctionalComponent education='Engineer' age='25'/> 
      <ClassComponent education='MBBS' amount='26,000'/>
      <br></br>
      <CounterDiv num={0}/>
    </>
  )
}

export default App
