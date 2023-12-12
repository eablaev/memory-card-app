
import React, { useState } from 'react';

import styles from './GameIntro.module.css'

export default function GameIntro({setGameState}) {
    function startGame() {
        console.log('start')
        setGameState('game')
    }
    return(
        <div className={styles.gameIntroContainer}>
            <h4>Embark on a journey to Taraxus: The Last Battle, where the future of a city teeters on the brink of time. In the gleaming metropolis of Teraxus, a diverse array of guardians stands ready to defend against the encroaching darkness. Your mission: to unveil these protectors and harness their unique abilities. Remember, choosing the same guardian twice disrupts the delicate balance of power. Strategize your selections to reinforce the city’s defenses and secure the destiny of Teraxus. The battle for tomorrow begins with your resolve today.</h4>
            <div onClick={startGame} className={styles.beginBtn}>BEGIN</div>
        </div>
    )
}
