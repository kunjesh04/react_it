import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./components/SelfPractice/sty.css";

import FunctionalComponent from "./components/FunctionalComponent"
import ClassComponent from './components/ClassComponent'
import Toggle from './components/Toggle'
import CounterDiv from './components/CounterDiv'
import PropsType from './components/PropsType'
import InlineCSS from './components/cssComponents/InlineCSS'
import FormHandling from './components/FormHandling'
import Parent from './components/Parent'
import TicTacToe from './components/SelfPractice/TicTacToe'
import LifeCycleA from './components/LifeCycleMethods/LifeCycleA';
import ToDo from './components/ToDo';
import Ref from './components/Ref';
import HoverCounter from './components/HOC/HoverCounter';
import ClickCounter from './components/HOC/ClickCounter';
import Lifts from './components/HOC/LiftAuth/Lifts';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Lifts />
      {/* 
    < HoverCounter />
    <ClickCounter /> */}
      {/* <Ref/> */}

      {/* <ToDo /> */}

      {/* <LifeCycleA />
      <TicTacToe /> */}

      {/* <Parent></Parent> */}

      {/* <FormHandling /> */}


      {/* <InlineCSS></InlineCSS> */}

      {/* <PropsType
        name='Gojo'
        age={25}
        isMarried={false}
        array={[4, 5]}
        obj={{ s: '10', a: '20', t: '25', o: '10', r: '20', u: '25' }}></PropsType> */}

      <br></br>

      {/* <Toggle text='Welcome to React Stretch'>
        <p name="Luffy">Para-1</p>
        <p name="Zoro">Para-2</p>
        <p>Para-3</p>
        <p>Para-4</p>
      </Toggle>

      <ClassComponent education='Constructor' amount='25,000' />
      <FunctionalComponent education='Doctor' age='40' />

      <FunctionalComponent education='Engineer' age='25' />
      <ClassComponent education='MBBS' amount='26,000' />

      <br></br>

      <CounterDiv num={0} /> */}
    </>
  )
}

export default App
