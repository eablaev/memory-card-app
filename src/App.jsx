import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Characters from './components/Characters.jsx'
import ScoreBoard from './components/ScoreBoard.jsx'





function App() {
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

  return (
    <div className='container'>
        <div className="leftSide">
           <div className='logo'>
            <h1>Teraxus</h1>
            <h2>The Last Battle</h2>
           </div>
        </div>
        <div className="center">
            <Characters
                setBestScore={setBestScore}
                setCurrentScore={setCurrentScore} 
                bestScore={bestScore}
                currentScore={currentScore}
            /> 
        </div>
        <div className="rightSide">
            <ScoreBoard 
                bestScore={bestScore}
                currentScore={currentScore}
            />
        </div>
        
        
       
    </div>
    
  )
}

export default App
