import React from 'react'
import Basics from './Components/Basics';
import CounterApp from './Components/Counter';
import './App.css'
import Obj from './Components/Obj';
import FormBasic from './Components/FormBasic';


const App = () => {
  return (
    <div>

        {/* <Basics /> */}

        {/*use State as variable */}
        <hr />
        {/* <CounterApp/> */}
        <hr />
     {/*use State as obj */}
        <Obj/>
        <hr />
        <FormBasic/>


    </div>
  )
}

export default App;