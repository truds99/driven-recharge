import httpStatus from "http-status";
import { Request, Response } from "express";
import { RechargeData } from "../protocols/protocols";
import { postRechargeService } from "../services/recharges-service";


export async function postRecharge(req: Request, res: Response) {
    const rechargeData = req.body as RechargeData;
    const rechargeRegister = await postRechargeService(rechargeData);

    res.status(httpStatus.CREATED).send(rechargeRegister.rows[0]);
} 
