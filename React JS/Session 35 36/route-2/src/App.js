import React from "react";
// import UserList from "./Components/UserList";
import {Routes,Route} from "react-router-dom";
import FilterUsers from "./Components/FilterUsers";


const App =() =>{
    return (
       <div className="App"> 
         <Routes>
              {/* <Route path="/" element={<UserList  />} />
            <Route path="user/:x" element={<UserList />} /> */}
            <Route path="/" element={<FilterUsers/>} />
            
            </Routes>

       </div>
    )
}

export default App;