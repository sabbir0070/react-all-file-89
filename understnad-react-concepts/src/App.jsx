import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Device from './components/Device/Device'
import DeviceDetails from './components/DeviceDetails/DeviceDetails'
import Watch from './components/Watch/Watch'
import Knob from './components/Knob/Knob'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <Knob steps='450' ></Knob>
      <Device name="uphone" price="5000 taka" brand='samsung'></Device>
      <Watch></Watch>
     
    </div>
  )
}

export default App
