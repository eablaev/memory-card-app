import { motion, AnimatePresence } from 'framer-motion';
import styles from './ScoreBoard.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartReg } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSol } from '@fortawesome/free-solid-svg-icons';

export default function ScoreBoard ({currentScore, bestScore, lives, gameState}) {
   console.log('inside Board Score')
    const totalLives = 3; 
    const iconsArray = Array.from({length: totalLives}, (_, index)=> {
        return  index < lives ? faHeartSol : faHeartReg
    });

    const containerVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { duration: .3 } },
        exit: { opacity: 0, scale: 0, transition: { duration: 0.5 } },
    };

    return (
    <AnimatePresence> 
       {gameState === 'game'&& (<motion.div 
        className={styles.scoreBoard}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariants}
        >
            <div className={styles.currentScore}>
                <h2>Score: </h2>
                <h2 >{currentScore}</h2>
            </div>
            <div className={styles.bestScore}>
                <h2>Best Score:</h2>
                <h2 >{bestScore}</h2>
            </div> 
            <div className={styles.livesDisplay}>
               {iconsArray.map((icon, index)=> {
                    return <FontAwesomeIcon key={index} icon={icon} />
               })}
            </div> 
       </motion.div>)}
    </AnimatePresence> 
    )
}