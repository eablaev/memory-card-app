
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from './Characters.module.css'

import Crimea from "../assets/images/characters/Crimea.jpeg";
import Jix from "../assets/images/characters/Jix.jpeg";
import Lostor from "../assets/images/characters/Lostor.jpeg";
import Malina from "../assets/images/characters/Malina.jpeg";
import Roldo from "../assets/images/characters/Roldo.jpeg";
import Samitra from "../assets/images/characters/Samitra.jpeg";
import Sanokris from "../assets/images/characters/Sanokris.jpeg";
import Shiraq from "../assets/images/characters/Shiraq.jpeg";
import Sila from "../assets/images/characters/Sila.jpeg";
import Skarim from "../assets/images/characters/Skarim.jpeg";
import Xanarx from "../assets/images/characters/Xanarx.jpeg";
import Zimera from "../assets/images/characters/Zimera.jpeg";
import cardBack from "../assets/images/characters/cardBack.jpeg"

const charactersArray = [
    { id: uuidv4(), name: 'Crimea', src: Crimea, isClicked: false },
    { id: uuidv4(), name: 'Jix', src: Jix, isClicked: false },
    { id: uuidv4(), name: 'Lostor', src: Lostor, isClicked: false },
    { id: uuidv4(), name: 'Malina', src: Malina, isClicked: false },
    { id: uuidv4(), name: 'Roldo', src: Roldo, isClicked: false },
    { id: uuidv4(), name: 'Samitra', src: Samitra, isClicked: false },
    { id: uuidv4(), name: 'Sanokris', src: Sanokris, isClicked: false },
    { id: uuidv4(), name: 'Shiraq', src: Shiraq, isClicked: false },
    { id: uuidv4(), name: 'Sila', src: Sila, isClicked: false },
    { id: uuidv4(), name: 'Skarim', src: Skarim, isClicked: false },
    { id: uuidv4(), name: 'Xanarx', src: Xanarx, isClicked: false },
    { id: uuidv4(), name: 'Zimera', src: Zimera,isClicked: false, isSpecial: true }
];

function Character({name, src, isSpecial }) {
    return (
    <>
        <div className={styles.charCard}  id={isSpecial ? 'isSpecial' : null}>
            <div className={styles.front} >
                <h3>{name}</h3>
                <img src={src} alt={name} /> 
            </div>
            <div className={styles.back} >
                <img src={cardBack} alt={name} /> 
            </div>   
        </div>  
    </>
    )
}

export default function Characters({setBestScore, setCurrentScore, bestScore, currentScore, setGameState, lives, setLives}) {
    const [isRotated, setRotated] = useState(false);
    const [charArray, setCharArr] = useState(charactersArray);
    

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const onTransitionEnd = (e) => {
        console.log('animation end')
        if(e.target.id && isRotated) {
            const newArray = shuffleArray([...charArray]);
            setCharArr(newArray);
            setTimeout(() => {
                setRotated(prevState => !prevState);
            },300)
        }   
    }

    const onClick = (e) => {
        //making sure only applies when cards are rotated
        if (!isRotated) {
            const charName = e.target.closest(`.${styles.front}`).querySelector('h3').innerHTML;
            const charIndex = charArray.findIndex(char => char.name === charName);
            
            let updatedArray = charArray;
            let gameOver = false;
    
            // Checking if it was already clicked
            if (charArray[charIndex].isClicked) {
                // Checking if the game is over
                if (lives <= 1) {
                    console.log('game over');
                    setGameState('gameEnd');
                    gameOver = true;
                   
                } else {
                    
                    setBestScore(bestScore => Math.max(bestScore, currentScore));
                }
                //reset current score for the next round or new game
                setLives(lives => lives - 1);
                setCurrentScore(0);
            } else {
                // If the card has not been clicked yet
                setCurrentScore(currentScore => currentScore + 1);
            }
    
            // Update the array and state only if the game is not over
            if (!gameOver) {
                updatedArray = charArray.map(char => {
                    if (char.name === charName) {
                        return { ...char, isClicked: !charArray[charIndex].isClicked };
                    }
                    return char;
                });
                
                setCharArr(updatedArray);
                setRotated(prevState => !prevState);
                
            } 
        }
    };
   
    
    return (
        <div className={`${styles.charsContainer} ${isRotated ? styles.rotate : ''}`} 
                onClick={onClick}
                onTransitionEnd={onTransitionEnd}
                >
            {charArray.map(char => <Character 
                key={char.id} 
                name={char.name} 
                src={char.src} 
                isSpecial={char.isSpecial}
                />)}
        </div>
    );
}
