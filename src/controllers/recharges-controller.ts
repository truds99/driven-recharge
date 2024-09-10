import httpStatus from "http-status";
import { Request, Response } from "express";
import { RechargeData } from "../protocols/protocols";
import { postRechargeService } from "../services/recharges-service";
import { getPhoneIdRep } from "../repositories/phones-repository";
import { getRechargesBySomethingRep } from "../repositories/recharges-repository";



export async function postRecharge(req: Request, res: Response) {
    const rechargeData = req.body as RechargeData;
    const rechargeRegister = await postRechargeService(rechargeData);

    res.status(httpStatus.CREATED).send(rechargeRegister.rows[0]);
}

export async function getRechargesByNumber(req: Request, res: Response) {
    const { number } = req.params;
    const phoneId = (await getPhoneIdRep(number));
    
    const recharges = await getRechargesBySomethingRep('phone_id', phoneId);

    res.status(httpStatus.OK).send(recharges);
} 

