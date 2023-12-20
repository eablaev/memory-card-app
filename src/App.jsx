import { useState,useRef,useEffect } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeMute as soundOff } from '@fortawesome/free-solid-svg-icons';
import { faVolumeUp as soundUp } from '@fortawesome/free-solid-svg-icons';

import Characters from './components/Characters.jsx'
import ScoreBoard from './components/ScoreBoard.jsx'
import GameName from './components/GameName.jsx'
import GameIntro from './components/GameIntro.jsx'
import GameEnd from './components/GameEnd.jsx'

import intro from './assets/audio/intro.mp3'
import game from './assets/audio/game.mp3'



function App() {
    const [gameState, setGameState] = useState('gameIntro')
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [lives, setLives ] = useState(3);
    const [soundOn, setSoundOn] = useState(false);
    const volIcon = soundOn ? soundUp : soundOff
  

    const introMusicRef = useRef(new Audio(intro)); // create a reference to sound
    const gameMusicRef = useRef(new Audio(game)); // create a reference to sound
    
    const toggleSound = () => {
        setSoundOn((prevSoundOn) => !prevSoundOn);
    };

    useEffect(() => {
        const introMusic = introMusicRef.current;
        const gameMusic = gameMusicRef.current;
      
        introMusic.loop = true;
        gameMusic.loop = true;
      
        if (soundOn) {
          console.log("SOUND ON");
          if (gameState === 'game') {
            introMusic.pause();
            gameMusic.play();
          } else {
            gameMusic.pause();
            introMusic.play();
          }
        } else {
          console.log("SOUND OFF");
          introMusic.pause();
          gameMusic.pause();
        }
      
        return () => {
          introMusic.loop = false;
          gameMusic.loop = false;
        };
      }, [soundOn, gameState]);
      

    



  return (

    <div className='container'>
        <div className="leftSide">
          <GameName 
            setGameState={setGameState}
            setBestScore={setBestScore}
            setCurrentScore={setCurrentScore}
            gameState={gameState}
          />
        <div className='soundBtn' onClick={toggleSound}>
         <FontAwesomeIcon  icon={volIcon} />
        </div>
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
                soundOn={soundOn}
               
                
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
