import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./utilities/db.js";
import routes from "./routes/routes.js";

dotenv.config();

//create a database connection -> u can also
//create a separate file for this and then import/use that file here


connectDB();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use("/api", routes);


app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
