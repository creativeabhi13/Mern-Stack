const express = require('express');
const app = express();
const port = 5000 ; // Change the port number to 5001 or use PORT environment variable

var cors = require('cors')

app.use(cors()) ;

// Middleware to parse JSON bodies
app.use(express.json());

// Route to calculate sum
app.post('/sum', (req, res) => {
  const { num1, num2 } = req.body;

  // Check if both numbers are provided
  if (num1 === undefined || num2 === undefined) {
    return res.status(400).json({ error: 'Please provide both num1 and num2' });
  }

  // Check if provided values are numbers
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).json({ error: 'Both num1 and num2 should be numbers' });
  }

  // Calculate the sum

  const sum = num1 + num2;

  // Send response
  
  res.json({  sum });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
