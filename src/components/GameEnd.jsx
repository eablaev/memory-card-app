
import { motion, AnimatePresence } from 'framer-motion';
import styles from './GameEnd.module.css'

export default function GameEnd({setGameState, lives, setLives, gameState}) {

    const containerVariants = {
        hidden: {opacity:0, x: -1100 }, // start from above the screen
        visible: {opacity:1, x: 0, transition: { duration: 1,  ease: "easeInOut"  } }, // move to the center of the screen
        exit: { opacity: 0, x: -1100, transition: { duration: .5 } }, // move to below the screen
      };
    console.log('inside endGame lives:'+lives)
    console.log(lives > 0)
  
    const winningMessage = `Congratulations, valiant strategist! Your keen insight has unveiled the guardians of Teraxus and harnessed their unparalleled powers. With each wise selection, you fortified the metropolis, repelling the darkness that sought to claim it. The city's future is now radiant, thanks to your unwavering resolve. The guardians stand united, their balance of power unbroken, all because of your masterful leadership. Rejoice, for Teraxus thrives – a beacon of hope preserved for generations to come!`
    const losingMessage = `Alas, the shadows have descended upon Teraxus. Despite your valiant efforts, the city's fate has slipped through the sands of time. The guardians, though mighty, were not unveiled in harmony, and the balance of power wavered under the weight of repetition. As night falls on the once gleaming metropolis, remember: every end is but a new beginning. Take heart, brave soul, for the battle for tomorrow can still be won with the lessons learned today. Rise again, and may your resolve burn ever brighter.`
    const message = lives > 1 ? winningMessage : losingMessage;
    function startGame() {
        setGameState('game');
   
    }
    return(
    <AnimatePresence>  
        {gameState === 'gameEnd' && 
        (<motion.div 
        className={styles.gameEndContainer}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariants}
        >
            <h4>{message}</h4>
            <div onClick={startGame} className={styles.beginBtn}>PLAY AGAIN</div>
        </motion.div>)}
    </AnimatePresence>
    )
}
