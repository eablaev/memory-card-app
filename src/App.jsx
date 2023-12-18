import { useState } from 'react'
import { motion } from 'framer-motion';
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
    const [lives, setLives ] = useState(3);

    const containerVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { duration: .1 } },
        exit: { opacity: 0, scale: 0, transition: { duration: .1 } },
    };

  return (

    
    <motion.div 
            className='container'
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
            exitBeforeEnter
    >
        <div className="leftSide">
          {(gameState === 'game' || gameState === 'gameIntro') && <GameName 
            setGameState={setGameState}
            setBestScore={setBestScore}
            setCurrentScore={setCurrentScore}
          />}
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
            {gameState ==='gameEnd' && <GameEnd 
            setGameState={setGameState}
            lives = {lives}
            setLives={setLives}
            /> }
           
        </div>
        <div className="rightSide">
          <ScoreBoard 
                bestScore={bestScore}
                currentScore={currentScore}
                lives={lives}
                gameState={gameState}
            />
        </div>
        
        
       
    </motion.div>
    
  )
}

export default App
