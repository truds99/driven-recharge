import { Router } from "express";
import { postPhone } from "../controllers/phones-controller";
import validateSchema from "../middlewares/schemas-middleware";
import { postPhoneSchema } from "../schemas/phone-schema";
import { getPhonesByCostumer } from "../controllers/phones-controller";

export const phonesRouter = Router();

phonesRouter.post('/phones', validateSchema(postPhoneSchema), postPhone);
phonesRouter.get('/phones/:document', getPhonesByCostumer);