import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  //let counter=3
  let[counter,setCounter]=useState(15);
  

  const addValue=() =>{
    console.log("value added",counter);
    setCounter(counter+1)
  }
  const removeValue=() =>{
    console.log("value added",counter);
    setCounter(counter-1);
  }
  return (
   
    <>
    <h1> Welcome Back Buddy!!</h1>
    <h2>Counter Value :{counter}</h2>
    <button onClick={addValue}> Add Values </button>
    <br/>
    <button onClick={removeValue}>Remove Values</button>
    
    </>
  )
}

export default App
