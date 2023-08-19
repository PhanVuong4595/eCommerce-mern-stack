import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

//rest object
const app = express();
dotenv.config();

// middleware
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

//rest api
app.get("/", (req, res) => {
  res.send({
    Message: "Welcome to eCommerce app",
  });
});

//PORT
const PORT = process.env.PORT || 8000;

//run listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
