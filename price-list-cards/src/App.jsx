import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Pricelist from './Component/Pricelist/Pricelist'
import Deshboard from './Component/Deshboard/Deshboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Navbar></Navbar>
      <h2 className='text-5xl text-purple-700  ' >hello from tailwind</h2>
    <Pricelist></Pricelist>
    <Deshboard></Deshboard>
    </div>
  )
}

export default App
