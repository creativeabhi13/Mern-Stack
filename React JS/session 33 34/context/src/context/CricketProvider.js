import React, { useState } from "react";
import PackageContext from "./CricketContext";

const CricketProvider = (props) => {
  // let highestScore = 270
  const [cricketer, setCricketer] = useState({
    name: "Rohit Sharma",
    highestScore: 270,
    total100s: 30,
    total200s: 5,
  });

  console.log(cricketer);

  return (
    <div>
      {
        <PackageContext.Provider
          value={{
            cricketer: cricketer,
            setCricketer: setCricketer,
          }}
        >
          {props.children}
        </PackageContext.Provider>
      }
    </div>
  );
};

export default CricketProvider;
