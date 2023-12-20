
import { motion, AnimatePresence } from 'framer-motion';
import styles from './GameIntro.module.css'

export default function GameIntro({gameState,setGameState}) {
    const containerVariants = {
        hidden: {opacity:0, x: -1100 }, // start from above the screen
        visible: {opacity:1, x: 0, transition: { duration: 1,  ease: "easeInOut"  } }, // move to the center of the screen
        exit: { opacity: 0, x: -1100, transition: { duration: .5 } }, // move to below the screen
      };

   
      
    function startGame() {
        console.log('start')
        setGameState('game')  
    }
    return(
    <AnimatePresence>  
        {gameState === 'gameIntro' &&(<motion.div 
        key="intro"
        className={styles.gameIntroContainer}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariants}
        >
            <h4>Embark on a journey to Taraxus: The Last Battle, where the future of a city teeters on the brink of time. In the gleaming metropolis of Teraxus, a diverse array of guardians stands ready to defend against the encroaching darkness. Your mission: to unveil these protectors and harness their unique abilities. Remember, choosing the same guardian twice disrupts the delicate balance of power. Strategize your selections to reinforce the city’s defenses and secure the destiny of Teraxus. The battle for tomorrow begins with your resolve today.</h4>
            <div onClick={startGame} className={styles.beginBtn}>BEGIN</div>
        </motion.div>)}
    </AnimatePresence>
    )
}
