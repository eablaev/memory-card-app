import { useState } from 'react'
import './App.css'

import Characters from './components/Characters.jsx'
import ScoreBoard from './components/ScoreBoard.jsx'
import GameName from './components/GameName.jsx'
import GameIntro from './components/GameIntro.jsx'
import GameEnd from './components/GameEnd.jsx'


function App() {
    const [gameState, setGameState] = useState('gameEnd')
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [lives, setLives ] = useState(3);

  return (

    <div className='container'>
        <div className="leftSide">
          <GameName 
            setGameState={setGameState}
            setBestScore={setBestScore}
            setCurrentScore={setCurrentScore}
            gameState={gameState}
          />
        </div>
        <div className="center">
             <Characters
                setBestScore={setBestScore}
                setCurrentScore={setCurrentScore} 
                bestScore={bestScore}
                currentScore={currentScore}
                gameState={gameState}
                setGameState={setGameState}
                lives={lives}
                setLives={setLives}
            /> 
            <GameIntro 
            gameState={gameState}
            setGameState={setGameState}
            /> 
            <GameEnd 
            setGameState={setGameState}
            lives = {lives}
            setLives={setLives}
            gameState={gameState}
            /> 
           
        </div>
        <div className="rightSide">
          <ScoreBoard 
                bestScore={bestScore}
                currentScore={currentScore}
                lives={lives}
                gameState={gameState}
            />
        </div>   
    </div>
  )
}

export default App
