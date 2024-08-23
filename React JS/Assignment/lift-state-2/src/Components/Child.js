import React from 'react';


function Child({ inputValue, onInputChange }) {
  return (
    <div className="child">
      <input
        type="text"
        value={inputValue || ''} // Ensure inputValue is never undefined
        onChange={onInputChange}
      />
    </div>
  );
}

export default Child;
