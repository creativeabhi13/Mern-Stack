const express = require('express');
const app = express();
const dotenv = require('dotenv');
const {connectDB} = require('./db.js');
const routes = require('./routes/routes.js');
const User = require('./models/user.js');

dotenv.config();

const PORT = process.env.PORT || 3010;

connectDB();

app.use(express.json());




// define routes
app.use('/api',routes);


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

