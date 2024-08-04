import React, { useState } from 'react'

const TicTacToe = () => {
    let [ticArr, setTicArr] = useState([])
    let [player, setPlayer] = useState('X')
    let [winner, setWinner] = useState('')
    let [draw, setDraw] = useState(false)
    let [count, setCount] = useState(0)
    let [reset, setReset] = useState(false)
    let [resetCount, setResetCount] = useState(0)
    let [resetArr, setResetArr] = useState([])
    let [resetPlayer, setResetPlayer] = useState('X')
    let [resetWinner, setResetWinner] = useState('')
    let [resetDraw, setResetDraw] = useState(false)
    let [resetReset, setResetReset] = useState(false)
    let [resetResetCount, setResetResetCount] = useState(0)
    let [resetResetArr, setResetResetArr] = useState([])
    let [resetResetPlayer, setResetResetPlayer] = useState('X')
    let [resetResetWinner, setResetResetWinner] = useState('')
    let [resetResetDraw, setResetResetDraw] = useState(false)
    let [resetResetReset, setResetResetReset] = useState(false)
    let [resetResetResetCount, setResetResetResetCount] = useState(0)
    let [resetResetResetArr, setResetResetResetArr] = useState([])
    let [resetResetResetPlayer, setResetResetResetPlayer] = useState('X')
    let [resetResetResetWinner, setResetResetResetWinner] = useState('')
    let [resetResetResetDraw, setResetResetResetDraw] = useState(false)
    

    const handleClick = (index) => {

        if (ticArr[index] === undefined) {
            ticArr[index] = player
            setTicArr([...ticArr])
            setPlayer(player === 'X' ? 'O' : 'X')
            setCount(count + 1)
        }

        if (ticArr[0] === 'X' && ticArr[1] === 'X' && ticArr[2] === 'X' ||
            ticArr[3] === 'X' && ticArr[4] === 'X' && ticArr[5] === 'X' ||
            ticArr[6] === 'X' && ticArr[7] === 'X' && ticArr[8] === 'X' ||
            ticArr[0] === 'X' && ticArr[3] === 'X' && ticArr[6] === 'X' ||
            ticArr[1] === 'X' && ticArr[4] === 'X' && ticArr[7] === 'X' ||
            ticArr[2] === 'X' && ticArr[5] === 'X' && ticArr[8] === 'X' ||
            ticArr[0] === 'X' && ticArr[4] === 'X' && ticArr[8] === 'X' ||
            ticArr[2] === 'X' && ticArr[4] === 'X' && ticArr[6] === 'X') {
            setWinner('X')
        } else if (ticArr[0] === 'O' && ticArr[1] === 'O' && ticArr[2] === 'O' ||
            ticArr[3] === 'O' && ticArr[4] === 'O' && ticArr[5] === 'O' ||
            ticArr[6] === 'O' && ticArr[7] === 'O' && ticArr[8] === 'O' ||
            ticArr[0] === 'O' && ticArr[3] === 'O' && ticArr[6] === 'O' ||
            ticArr[1] === 'O' && ticArr[4] === 'O' && ticArr[7] === 'O' ||
            ticArr[2] === 'O' && ticArr[5] === 'O' && ticArr[8] === 'O' ||
            ticArr[0] === 'O' && ticArr[4] === 'O' && ticArr[8] === 'O' ||
            ticArr[2] === 'O' && ticArr[4] === 'O' && ticArr[6] === 'O') {
        
            setWinner('O')
            }
        if (count === 9 && winner === '') {
            setDraw(true)
        }
    }

    const handleReset = () => {
        setTicArr([])
        setPlayer('X')
        setWinner('')
        setDraw(false)
        setCount(0)
    }

    const handleResetReset = () => {
        setResetArr([])
        setResetPlayer('X')
        setResetWinner('')
        setResetDraw(false)
        setResetCount(0)
    }

    const handleResetResetReset = () => {
        setResetResetArr([])
        setResetResetPlayer('X')
        setResetResetWinner('')
        setResetResetDraw(false)
        setResetResetCount(0)
    }

    const handleResetResetResetReset = () => {
        setResetResetResetArr([])
        setResetResetResetPlayer('X')
        setResetResetResetWinner('')
        setResetResetResetDraw(false)
        setResetResetResetCount(0)
    }



  return (
    <div>
        <h1>Tic Tac Toe</h1>
        <h2>Player: {player}</h2>
        <h2>Winner: {winner}</h2>
        <h2>Draw: {draw.toString()}</h2>
        <button onClick={handleReset}>Reset</button>
        <div className="tic-tac-toe">
            {ticArr.map((item, index) => (
                <div key={index} onClick={() => handleClick(index)}>{item}</div>
            ))}


        </div>
        <h1>Reset</h1>
        <h2>Player: {resetPlayer}</h2>
        <h2>Winner: {resetWinner}</h2>
        <h2>Draw: {resetDraw.toString()}</h2>
        <button onClick={handleResetReset}>Reset</button>
        <div className="tic-tac-toe">
            {resetArr.map((item, index) => (
                <div key={index} onClick={() => handleClick(index)}>{item}</div>
            ))}
        </div>
        <h1>Reset Reset</h1>
        <h2>Player: {resetResetPlayer}</h2>
        <h2>Winner: {resetResetWinner}</h2>
        <h2>Draw: {resetResetDraw.toString()}</h2>
        <button onClick={handleResetResetReset}>Reset</button>
        <div className="tic-tac-toe">
            {resetResetArr.map((item, index) => (
                <div key={index} onClick={() => handleClick(index)}>{item}</div>
            ))}
        </div>
        <h1>Reset Reset Reset</h1>
        <h2>Player: {resetResetResetPlayer}</h2>
        <h2>Winner: {resetResetResetWinner}</h2>
        <h2>Draw: {resetResetResetDraw.toString()}</h2>
        <button onClick={handleResetResetResetReset}>Reset</button>
            
        <div className="tic-tac-toe">
            {resetResetResetArr.map((item, index) => (
                <div key={index} onClick={() => handleClick(index)}>{item}</div>
            ))}

        </div>
    </div>

  )
}

export default TicTacToe