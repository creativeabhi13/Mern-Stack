import React from 'react';

const Child = ({ onButtonClick }) => {
  return (
    <button onClick={onButtonClick} className="show-modal-button">Show Modal</button>
  );
};

export default Child;
