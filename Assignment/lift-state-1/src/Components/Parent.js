import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <div className="parent">
      <h2>Parent Component</h2>
      <Child onButtonClick={handleShowModal} />
      {showModal && 
        <div className="modal-overlay">
          <h5>Modal Content </h5>
          <div className="modal">

          <p>This is a modal content </p>
            <button onClick={() => setShowModal(false)} className="close-button">Close</button>
          </div>
        </div>
      }
    </div>
  );
}

export default Parent;
