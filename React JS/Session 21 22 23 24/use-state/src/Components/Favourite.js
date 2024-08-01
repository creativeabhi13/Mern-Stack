import React, { useState } from 'react'


let fruits =["apple", "banana", "mango", "orange", "grapes" ];
const Favourite = () => {
    const [fruitsCollection, setFruitsCollection] = useState(fruits);
    let [newFruit, setNewFruit] = useState('');
// add fruit if it is not in the list
 console.log(newFruit);
const addFruits = (e) => {
    e.preventDefault();
   setFruitsCollection([...fruitsCollection,newFruit]);
setNewFruit('');
}

  return (
    <div>
      
       <form onSubmit={addFruits}>
        <input type="text"  placeholder='new Fruits'
         onChange={(e)=>setNewFruit(e.target.value)} value={newFruit} />
        <button type='submit'>Add</button>
       </form>
         {/* {display the fruits} */}
         {
              fruitsCollection.map((fruit, index) => {
                 return <div key={index}>
                    
                    <h3>{fruit}</h3></div>
              })
         }
    </div>
  )
}

export default Favourite