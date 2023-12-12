import React, { useState } from 'react';
import styles from './ScoreBoard.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartReg } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSol } from '@fortawesome/free-solid-svg-icons';






export default function ScoreBoard ({currentScore, bestScore, lives}) {
    const totalLives = 3; 
    const iconsArray = Array.from({length: totalLives}, (_, index)=> {
        return  index < lives ? faHeartSol : faHeartReg
    })

    return (
       <div className={styles.scoreBoard}>
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
       </div>
    )
}