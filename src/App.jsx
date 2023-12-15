import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Characters from './components/Characters.jsx'
import ScoreBoard from './components/ScoreBoard.jsx'
import GameName from './components/GameName.jsx'
import GameIntro from './components/GameIntro.jsx'
import GameEnd from './components/GameEnd.jsx'





function App() {
    const [gameState, setGameState] = useState('gameIntro')
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [lives, setLives ] = useState(3)

  return (
    <div className='container'>
        <div className="leftSide">
          {(gameState === 'game' || gameState === 'gameIntro') && <GameName 
            setGameState={setGameState}
            setBestScore={setBestScore}
            setCurrentScore={setCurrentScore}
          />}
        </div>
        <div className="center">
            {gameState === 'game' && <Characters
                setBestScore={setBestScore}
                setCurrentScore={setCurrentScore} 
                bestScore={bestScore}
                currentScore={currentScore}
                gameState={gameState}
                setGameState={setGameState}
                lives={lives}
                setLives={setLives}
            /> }
            {gameState ==='gameIntro' && <GameIntro 
            setGameState={setGameState}
            /> }
            {gameState ==='gameEnd' && <GameEnd 
            setGameState={setGameState}
            lives = {lives}
            setLives={setLives}
            /> }
           
        </div>
        <div className="rightSide">
          { gameState === 'game' && <ScoreBoard 
                bestScore={bestScore}
                currentScore={currentScore}
                lives={lives}
                
            />}
        </div>
        
        
       
    </div>
    
  )
}

export default App
