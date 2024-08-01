import React,{useState} from 'react'

const Obj = () => {

let [coins,setCoins] = useState({gold:0,silver:0,bronze:0})


// const incGold = () => {
//     // setCoins(coins.gold+1)  // this will not work
//     setCoins({...coins,gold:coins.gold+1})
// }

// const incSilver = () => {
//     setCoins({...coins,silver:coins.silver+1})
// }

// const incBronze = () => {
//     setCoins({...coins,bronze:coins.bronze+1})
// }


  return (
    <div>
        <br />
        <h1>Object</h1>
        <br />

        <h2>Gold: {coins.gold}  | Silver : {coins.silver} | Bronze:{coins.bronze}</h2>

        <button onClick={()=>setCoins({...coins,gold:coins.gold+1})}>Increase Gold</button>
        <button onClick={()=>  setCoins({...coins,silver:coins.silver+1})}>Increase Silver</button>
        <button onClick={()=>  setCoins({...coins,bronze:coins.bronze+1})}>Increase Bronze</button>
     
    </div>
  )
}

export default Obj