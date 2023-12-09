import React, { useState } from 'react';
import styles from './ScoreBoard.module.css'




export default function ScoreBoard ({currentScore, bestScore}) {
    

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
       </div>
    )
}