import express, { json } from "express";
import 'express-async-errors'
import dotenv from "dotenv";
import { phonesRouter } from "./routers/phones-router";
import cors from "cors";
import errorHandlerMiddleware from './middlewares/error-handler-middleware'
import { rechargesRouter } from "./routers/recharges-router";
import { summaryRouter } from "./routers/summary-router";

dotenv.config();
const app = express();
app.use(cors());
app.use(json());

app.use(phonesRouter);
app.use(rechargesRouter);
app.use(summaryRouter);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
