import React, { useState } from "react";
import axios from "axios";

const Sum = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [sum, setSum] = useState("");

  function implementSumApi(e) {
    e.preventDefault();

    // Convert inputs to numbers
    const number1 = Number(num1);
    const number2 = Number(num2);

    // Check if conversion is successful and inputs are numbers
    if (isNaN(number1) || isNaN(number2)) {
      console.error('Invalid input: Both num1 and num2 should be numbers');
      return;
    }

    axios.post('http://localhost:5000/sum', {
      num1: number1,
      num2: number2,
    })
      .then(response => setSum(response.data.sum))
      .catch(error => console.error('Error:', error));
  }

  return (
    <div>
      <form onSubmit={implementSumApi}>
        <input
          type="text"
          name="num1"
          placeholder="Enter Number 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="text"
          name="num2"
          placeholder="Enter Number 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <button type="submit">Sum</button>
      </form>
      {sum && <h1>Sum is: {sum}</h1>}
    </div>
  );
};

export default Sum;
