
import React, { useState } from 'react';

import styles from './GameEnd.module.css'

export default function GameIntro({setGameState, lives, setLives}) {
  
    const winningMessage = `Congratulations, valiant strategist! Your keen insight has unveiled the guardians of Teraxus and harnessed their unparalleled powers. With each wise selection, you fortified the metropolis, repelling the darkness that sought to claim it. The city's future is now radiant, thanks to your unwavering resolve. The guardians stand united, their balance of power unbroken, all because of your masterful leadership. Rejoice, for Teraxus thrives – a beacon of hope preserved for generations to come!`
    const losingMessage = `Alas, the shadows have descended upon Teraxus. Despite your valiant efforts, the city's fate has slipped through the sands of time. The guardians, though mighty, were not unveiled in harmony, and the balance of power wavered under the weight of repetition. As night falls on the once gleaming metropolis, remember: every end is but a new beginning. Take heart, brave soul, for the battle for tomorrow can still be won with the lessons learned today. Rise again, and may your resolve burn ever brighter.`
    const message = lives > 0 ? winningMessage : losingMessage;
    function startGame() {
        setGameState('game');
        setLives(3)
    }
    return(
        <div className={styles.gameEndContainer}>
            <h4>{message}</h4>
            <div onClick={startGame} className={styles.beginBtn}>PLAY AGAIN</div>
        </div>
    )
}
