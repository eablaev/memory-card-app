import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Characters from './components/Characters.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <Characters />
  )
}

export default App
