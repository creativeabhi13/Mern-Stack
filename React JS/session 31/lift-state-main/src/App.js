import React,{useState} from "react";
import Parent from "./Components/Parent";
import Child from "./Components/Child";

import "./App.css"

const App = () => {
  const [itemsArray, setItemsArray] = useState([]);
  console.log(itemsArray)

    return(
        <div className="App">
            <Parent itemsArray={itemsArray} setItemsArray={setItemsArray}/>
            <Child  itemsArray={itemsArray} setItemsArray={setItemsArray}/>
        </div>
    )
}

export default App;