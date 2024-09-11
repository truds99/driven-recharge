import { getSummary } from "../controllers/summary-controller";
import { Router } from "express";

export const summaryRouter = Router();

summaryRouter.get('/summary/:document', getSummary);