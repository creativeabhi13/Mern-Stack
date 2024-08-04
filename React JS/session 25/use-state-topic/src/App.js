import React from 'react'
import './style.css'
import Lazy from './Components/Lazy'
import './Components/Searching'
import Searching from './Components/Searching'
import TicTacToe from './Components/TicTacToe'


const App = () => {
  return (
    <div>
        <h1>React 18 Features</h1>
        {/* <Lazy /> */}
        <hr />
        {/* <Searching/> */}
        <hr />
        <TicTacToe/>
        
    </div>
  )
}

export default App