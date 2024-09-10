import joi from "joi";
import { RechargeData } from "../protocols/protocols";

export const postRechargeSchema = joi.object<RechargeData>({
    phone_id: joi.number().integer().positive().required(),
    value: joi.number().integer().positive().required().min(1000).max(100000)
})