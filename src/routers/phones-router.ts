import { Router } from "express";
import { postPhone } from "../controllers/phones-controller";

export const phonesRouter = Router();

phonesRouter.post('/phones', postPhone);