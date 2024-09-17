import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './utilities/db.js';
import routes from './routes/routes.js';

const app = express();
const PORT = process.env.PORT || 5002;

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Database connection
connectDB();

// Routes

app.use("/api", routes);

// Server


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});