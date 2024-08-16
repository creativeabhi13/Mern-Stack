import React, { useState } from "react";
import { FaX } from "react-icons/fa6";
import { PiNumberZeroBold } from "react-icons/pi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


let ticArray = new Array(9);
ticArray.fill("");

const TicTacToe = () => {
  // let [ticArray, setTicArray] = useState(arr);
  let [winMessage, setWinMessage] = useState("");
  let [isCross, setIsCross] = useState(false);

  console.log(ticArray);

  function winLogic(){
    
    // 3 Rows 
    // [0,1,2],
    // [3,4,5],
    // [6,7,8],
    for (let i=0;i<=6;i=i+3)
    {
      if(ticArray[i] === ticArray[i+1] && ticArray[i] === ticArray[i+2] && ticArray[i] != "")
      {
        setWinMessage(`Winner is ${ticArray[i]}`);
      }

    }

// 3 column
    // [0,3,6],
    // [1,4,7],
    // [2,5,8],
    for (let i=0;i<=2;i=i+1)
      {
        if(ticArray[i] === ticArray[i+3] && ticArray[i] === ticArray[i+6] && ticArray[i] != "")
        {
          setWinMessage(`Winner is ${ticArray[i]}`);
          return
        }
  
      }

// corner

    // [0,4,8],
    // [2,4,6]

    if(ticArray[0] === ticArray[4] && ticArray[0] === ticArray[8] && ticArray[0] != "")
    {
      setWinMessage(`Winner is ${ticArray[0]}`);
      return 
    }

    if(ticArray[2] === ticArray[4] && ticArray[2] === ticArray[6] && ticArray[2] != "")
    {
      setWinMessage(`Winner is ${ticArray[2]}`);
      return 
    }

    if(ticArray.includes("")===false)
{
  setWinMessage("Game is Draw");
  return 
}
  }


  
  function fillTicArray(index) {
if(winMessage){
  toast("Game is already over", { type: "success" });
  return 
}

    if (ticArray[index] != "") {
    toast("Already filled", { type: "error" });
      return;
    }

    // let newArr = [...ticArray];
    ticArray[index] = isCross === true ? "x": "o"
    // setTicArray(newArr);
    setIsCross(!isCross);

    winLogic();
  }
  function reset() {
    // setTicArray([]);
    ticArray.fill("");
    setWinMessage("");
    setIsCross(true);
  }
let winStyle ={
  opacity: 0.5

}
  // 9*9 Structure

  return (
    <div>
      <h1>Tic-Tac-Toe</h1>
      {winMessage && <h3>{winMessage}</h3>} 
      <button onClick={reset}>Reset</button>
      {winMessage=="" && <p> its {isCross===true ?"Cross":"Circle"}</p> }
      <ToastContainer
      position="bottom-right"
      autoClose={3000}
      />
      <div className="grid-container" style={winMessage?winStyle:{}}>
        {ticArray.map((value, index) => (
          <div
            key={index}
            className="grid-item"
            onClick={() => fillTicArray(index)}
          >
            {value==="x"   ? <FaX/> : value==="o"   ? <PiNumberZeroBold/> : ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicTacToe;
