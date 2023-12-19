import { motion, AnimatePresence } from 'framer-motion';
import styles from './GameName.module.css'

export default function GameName({setGameState, setBestScore, setCurrentScore, gameState}) {
    const containerVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { duration: .2 } },
        exit: { opacity: 0, scale: 0, transition: { duration: 0.5 } },
    };
    
    function resetGame() {
        console.log('start');
        setCurrentScore(0);
        setBestScore(0)
        setGameState('gameIntro')
    }
    return (
    <AnimatePresence> 
        {gameState === 'game'&& (<motion.div 
        className={styles.logo} 
        onClick={resetGame}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariants}
        >
            <h1>TERAXUS</h1>
            <h2>The Last Battle</h2>
        </motion.div>)}
    </AnimatePresence> 
    )
}