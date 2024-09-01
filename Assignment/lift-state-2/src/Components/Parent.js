import React, { useState } from 'react';
import Child from './Child';


function Parent() {
  const [inputValue, setInputValue] = useState(''); // Ensure initial value is a string

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="parent">
      <Child
        inputValue={inputValue}
        onInputChange={handleInputChange}
      />
    </div>
  );
}

export default Parent;
