import React, { useState ,useEffect} from "react";

const Basics = () => {
    let [gold,setGold] =useState(0);
    let [silver,setSilver] =useState(0);
    let [bronze,setBronze] =useState(0);


    // `useState drawnback is that it render the whole component again and again so the component which we 
    //  don't need to render that also render again and again so to avoid this we use useEffect hook`

    // document.title = `Gold : ${gold} | Silver : ${silver} | Bronze : ${bronze}`;
    // document.title = `Gold : ${gold} | Silver : ${silver} `;

    // useEffect
    // useeffect is used to perform side effects in functional component 
    // useEffect is called after every render of the component
    // useeffect has two important parameter 1st is function and 2nd is array of dependencies
    // if we pass empty array then it will behave as componentDidMount 
    // if we don't pass any array then it will behave as componentDidMount and componentDidUpdate
    // if we pass any variable in array then it will behave as componentDidUpdate
    // if we return a function from useEffect then it will behave as componentWillUnmount



    useEffect(()=>{
        console.log(gold,silver,bronze);
        document.title = `Gold : ${gold} | Silver : ${silver} | Bronze : ${bronze}`;
    },[gold,silver,bronze]);

    // it will run for the 1st time when component is mounted
    // useeffect is helping me to write some piece of code at the particular place which i can say like this piece of code is only work when this condition is triggered.
    // the condition is either we are working for the first time or we have array dependency and that array dependency is changed.
    

    return (
        <div>
            <h1>

                Gold : {gold} | Silver : {silver} | Bronze : {bronze}
            </h1>

            <button onClick={()=>setGold(gold+1)}>Gold</button>
            <button onClick={()=>setSilver(silver+1)}>Silver</button>
            <button onClick={()=>setBronze(bronze+1)}>Bronze</button>
        </div>
    )
}

export default Basics;