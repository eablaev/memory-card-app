
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    // { id: uuidv4(), name: 'Lostor', src: Lostor, isClicked: false },
    // { id: uuidv4(), name: 'Malina', src: Malina, isClicked: false },
    // { id: uuidv4(), name: 'Roldo', src: Roldo, isClicked: false },
    // { id: uuidv4(), name: 'Samitra', src: Samitra, isClicked: false },
    // { id: uuidv4(), name: 'Sanokris', src: Sanokris, isClicked: false },
    // { id: uuidv4(), name: 'Shiraq', src: Shiraq, isClicked: false },
    // { id: uuidv4(), name: 'Sila', src: Sila, isClicked: false },
    // { id: uuidv4(), name: 'Skarim', src: Skarim, isClicked: false },
    // { id: uuidv4(), name: 'Xanarx', src: Xanarx, isClicked: false },
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

export default function Characters({setBestScore, setCurrentScore, bestScore, currentScore,gameState, setGameState, lives, setLives}) {
    const [isRotated, setRotated] = useState(false);
    const [charArray, setCharArr] = useState(charactersArray);
    const [gameOver, setGameOver] = useState(false)
    
    let updatedArray = [...charArray];
    let updatedLives = lives;
    
    const containerVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { duration: .3 } },
        exit: { opacity: 0, scale: 0, transition: { duration: 0.5 } },
    };

    //useEffect runs after every render by default, but you can control when it runs by passing an array of dependencies.
    useEffect(() => {
        // Check for game over condition after lives update
        console.log('USE STATE')
        console.log(gameOver)
        if(gameOver) {
            setGameState('gameEnd');
        }
        
    }, [gameOver]);

    useEffect(() => {
        
        // This useEffect will run when gameState changes
        if (gameState === 'game') {
            console.log("USE STATE FOR RESET BOARD")
            resetBoard();
        }
    }, [gameState]);

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function updateAndShuffleArray(array) {
        const resultArray = array.map(char => {
            if(char.isClicked) {
                return { ...char, isClicked: false }
            } else {
                return char
            }
        });
        return shuffleArray(resultArray);
    }

    function resetBoard() {
        console.log('Inside resetBoard')
        setCurrentScore(0);
        setBestScore(0);
        setLives(3)
        updatedArray = updateAndShuffleArray(updatedArray)
        console.log('BOARD RESET')
        setCharArr(updatedArray)
    }

    const onTransitionEnd = (e) => {
       
        if(e.propertyName === 'transform' && e.target.id ==='isSpecial' && isRotated) {
            console.log('animation end')

            console.log('updatedArray onTransitionEnd: ')
            console.log(updatedArray)
            console.log(updatedArray.every(el => !el.isClicked))
           
            setCharArr(shuffleArray(updatedArray));
               
            setTimeout(() => {
                setRotated(prevState => !prevState);
            },300)
        }   
    }

    const onClick = (e) => {
       if(!isRotated){
       
        const charName = e.target.closest(`.${styles.front}`).querySelector('h3').innerHTML;
        const charIndex = charArray.findIndex(char => char.name === charName);
        
        //card has NOT been clicked on 
        if(!updatedArray[charIndex].isClicked) {
            console.log('card has NOT been clicked on')
            updatedArray[charIndex].isClicked = true;
            //check if player has won 
            if(updatedArray.every(char => char.isClicked)) {
                setGameOver(gameOver => !gameOver)
                console.log('you won and gameOver is: '+gameOver)
    
            } else {
                setCurrentScore(currentScore => currentScore+1);
                setRotated(prevState => !prevState);
            }
  
        } else {//card has been clicked on 
            
            console.log('card has been clicked on');
            updatedLives --;
            setLives(updatedLives);
            setCurrentScore(0)
            setBestScore(bestScore => Math.max(bestScore, currentScore));
            
            //check if lives are at 0
            if(updatedLives === 0) {
                console.log('updatedLives === 0')
                // setGameOver(gameOver => !gameOver);
                // console.log('You lose and gameOver is: '+gameOver)
                // setGameState('gameEnd');
                // resetBoard();
                setGameOver(gameOver => !gameOver)
                
            } else {
               
                updatedArray = charArray.map(char => {
                    // If the object has isClicked set to true, set it to false
                    if (char.isClicked) {
                      char.isClicked = false;
                    }
                    // Otherwise, do nothing (the object remains unchanged)
                    return char;
                  });

                console.log(updatedArray)
               
                // console.log(updatedArray.every(el => !el.isClicked))
                ///this will trigger the shuffling and updating array - look inside at animationend
                setRotated(prevState => !prevState);
            }
        }
       }
    };
    
   
    
    return(
    <><AnimatePresence  > 
       {gameState === 'game' &&(<motion.div 
            className={`${styles.charsContainer} ${isRotated ? styles.rotate : ''}`} 
            onClick={onClick}
            onTransitionEnd={onTransitionEnd}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
            // mode='wait'
            >
                {charArray.map(char => <Character 
                    key={char.id} 
                    name={char.name} 
                    src={char.src} 
                    isSpecial={char.isSpecial}
                    />)}
        </motion.div>)}
    </AnimatePresence> 
    </>
    )
}
