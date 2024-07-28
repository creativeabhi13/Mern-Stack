import React from 'react'

let relativeList = [
    "Aditya",
    "Arjun",
    "Arun",
    "Vandana",
    "Vikas",
];
    

const ReltaiveList = () => {
  return (
    <ol key="relativeList">
        {
            relativeList.map((rName, index) => <li key={index}>{rName}</li>)
        }
    </ol>
  )
}

export default ReltaiveList