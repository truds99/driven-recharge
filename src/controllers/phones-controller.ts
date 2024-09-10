import httpStatus from "http-status";
import { Request, Response } from "express";
import { postPhoneService } from "../services/phones-service";
import { Phone, RegisterPhoneData } from "../protocols/protocols";
import { getPhonesBySomethingRep } from "../repositories/phones-repository";

export async function postPhone(req: Request, res: Response) {
    const registerData = req.body as RegisterPhoneData;
    const phoneRegister = await postPhoneService(registerData);

    res.status(httpStatus.CREATED).send(phoneRegister.rows[0]);
} 

export async function getPhonesByCostumer(req: Request, res: Response) {
    const { document } = req.params;
    const phones = await getPhonesBySomethingRep('customer_document', document);

    res.status(httpStatus.OK).send(phones.rows);
}