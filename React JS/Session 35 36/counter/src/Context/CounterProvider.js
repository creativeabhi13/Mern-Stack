import React, { useState } from "react";
import CounterContext from "./CounterContext";

const CounterProvider =(props) => {
    const [count,setCount] = useState(0);

    return (
        <CounterContext.Provider value={{count:count, 

            increment: () => {
                setCount(count + 1);
            },
            decrement: () => {
                setCount(count - 1);
            },
            reset: () => {
                setCount(0);
            }
        }}>
            {props.children}
        </CounterContext.Provider>
    )
}

export default CounterProvider;