import styles from './GameName.module.css'



export default function GameName({setGameState, setBestScore, setCurrentScore}) {
    function resetGame() {
        console.log('start');
        setCurrentScore(0);
        setBestScore(0)
        setGameState('gameIntro')
    }
    return (
        <div className={styles.logo} onClick={resetGame}>
            <h1>TERAXUS</h1>
            <h2>The Last Battle</h2>
           </div>
    )
}