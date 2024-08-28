import { Router } from "express";
import { postPhone } from "../controllers/phones-controller";
import validateSchema from "../middlewares/schemas-middleware";
import { phoneSchema } from "../schemas/phone-schema";

export const phonesRouter = Router();

phonesRouter.post('/phones', validateSchema(phoneSchema), postPhone);