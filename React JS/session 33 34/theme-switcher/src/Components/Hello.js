import React,{useContext} from "react";
import StyleContext from "../context/StyleContext";

const Hello = () => {
   
    const {style,updateToYellow,updateToBlue} = useContext(StyleContext);
  

  console.log(style);
    return (
        <div style={style}>
            <h1>Hello World</h1>
            <button onClick={updateToYellow}>Yellow</button>
            <button onClick={updateToBlue}>Blue</button>
        </div>
    );
}

export default Hello;