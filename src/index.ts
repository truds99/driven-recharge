import express from "express";
import dotenv from "dotenv";
import db from "../src/database";

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
