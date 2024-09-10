import { Router } from "express";
import validateSchema from "../middlewares/schemas-middleware";
import { getRechargesByNumber, postRecharge } from "../controllers/recharges-controller";
import { postRechargeSchema } from "../schemas/recharge-schema";

export const rechargesRouter = Router();

rechargesRouter.post('/recharges', validateSchema(postRechargeSchema), postRecharge);
rechargesRouter.get('/recharges/:number', getRechargesByNumber);