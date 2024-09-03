import express, { json } from "express";
import 'express-async-errors'
import dotenv from "dotenv";
import { phonesRouter } from "../src/routers/phones-router";
import cors from "cors";
import errorHandlerMiddleware from '../src/middlewares/error-handler-middleware'

dotenv.config();
const app = express();
app.use(cors());
app.use(json());

app.use(phonesRouter);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
