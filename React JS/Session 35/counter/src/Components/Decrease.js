import React,{useContext} from 'react';
import CounterContext from '../Context/CounterContext';

const Decrease = () => {
    const {decrement} = useContext(CounterContext);
  return (
    <div>
    <button onClick={decrement}>Decrease</button>
    </div>

  )
}

export default Decrease;