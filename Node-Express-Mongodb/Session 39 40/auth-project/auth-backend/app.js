const express = require('express');
const app = express();

app.use(express.json());

const PORT = 5000;



app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);


















// signup & login
// email verify
// forget pwd
// dashboard



// dashboard where name is diaplyed
// email verify => email (link to verify email) otp
// forget pwd => email (link to reset pwd)

