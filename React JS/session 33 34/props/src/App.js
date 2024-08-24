import React from 'react'
import Hello from './components/hello';
import CounterApp from './components/counterApp';

const App = () => {
  return (
    <div >
      <Hello>
        <h2>Heyyy</h2>
        <p>Welccome here </p>
        
         </Hello>
         <Hello>
      <CounterApp/>
           </Hello>
    </div> 
  )
}

export default App;