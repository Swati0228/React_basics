import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"Swati",
    age:22

  }

  return (
    <>
      <h1 className="bg-green-300 text-black p-4 m-2 rounded-md">Tailwind test</h1>
      <Card username="code with Swatiii"  btnText="Click Me"/>
     
    </>
  )
}

export default App
