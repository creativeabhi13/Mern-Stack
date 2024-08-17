import React from 'react'
import './style.css'
import Lazy from './Components/Lazy'
import './Components/Searching'
import Searching from './Components/Searching'
import TicTacToe from './Components/TicTacToe'
import Async from './Components/async.js'


const App = () => {
  return (
    <div>
        {/* <h1>React 18 Features</h1> */}
        {/* <Lazy /> */}
        {/* <Searching/> */}
      
        {/* <TicTacToe/> */}
        <Async/>
        
    </div>
  )
}

export default App