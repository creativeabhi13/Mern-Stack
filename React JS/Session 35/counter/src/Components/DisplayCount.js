import React, { useContext } from 'react'
import CounterContext from '../Context/CounterContext'
import { Outlet } from 'react-router-dom';


const DisplayCount = () => {
    const {count} = useContext(CounterContext);
  return (
    <div>
        <h1>{count}</h1>
        <Outlet/>
    </div>
  )
}

export default DisplayCount