import React,{useContext} from "react";
import PackageContext from "../context/CricketContext";

const Hey = () => {
    let score = useContext(PackageContext)


    
    return (
        <div>
            <h1>Heyyyyyyyy</h1>
            {/* <h3>Score : {score}</h3> */}
        </div>
    );
}

export default Hey;