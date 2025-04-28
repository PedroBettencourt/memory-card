import Game from './card'
import { useState } from 'react';

function App() {

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  
  return (
    <>
      <h1>Plant Memory Game</h1>
      <div className="score">
        <span>Score: {score} --- </span>
        <span>Best Score: {bestScore}</span>
      </div>
      <Game score={score} setScore={setScore} bestScore={bestScore} setBestScore={setBestScore}/>
    </>
  )
}

export default App
