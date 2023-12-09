
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
   
    );
}

export default function Characters({setBestScore,setCurrentScore, bestScore, currentScore}) {
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
        if(e.target.id && isRotated) {
            const newArray = shuffleArray([...charArray]);
            setCharArr(newArray);
            setTimeout(() => {
                setRotated(prevState => !prevState);
            },300)
            }   
    }

    const onClick = (e) => {

       
       
        if(!isRotated) {
            const charName = e.target.closest(`.${styles.front}`).querySelector('h3').innerHTML;
            const charIndex = charArray.findIndex(char => char.name === charName);
            
            if (charArray[charIndex].isClicked) {
                const newCharArray = charArray.map(char => {
                    if(char.isClicked === true) {
                        return { ...char, isClicked: false };
                    } else {
                        return char
                    }
                });
                setCharArr(newCharArray);
                setRotated(prevState => !prevState);

                console.log(`${charName} has already been clicked.`);
                if(bestScore < currentScore) {
                    setBestScore(currentScore)
                }
                setCurrentScore(0);
               
                
            } else {
                const updatedArray = charArray.map(char => {
                    if (char.name === charName) {
                        return { ...char, isClicked: true };
                    }
                    return char;
                });
                setCurrentScore((currentScore) => currentScore+1)
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
