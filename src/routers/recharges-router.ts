import { Router } from "express";
import validateSchema from "../middlewares/schemas-middleware";
import { postRecharge } from "../controllers/recharges-controller";
import { postRechargeSchema } from "../schemas/recharge-schema";

export const rechargesRouter = Router();

rechargesRouter.post('/recharges', validateSchema(postRechargeSchema), postRecharge);
/* rechargesRouter.get('/phones/:document', getPhonesByCostumer); */