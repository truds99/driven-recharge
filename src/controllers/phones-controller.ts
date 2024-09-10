import httpStatus from "http-status";
import { Request, Response } from "express";
import { postPhoneService } from "../services/phones-service";
import { getPhonesBySomethingRep } from "../repositories/phones-repository";
import { RegisterData } from "../protocols/protocols";

export async function postPhone(req: Request, res: Response) {
    const registerData = req.body as RegisterData;
    const phoneRegister = await postPhoneService(registerData);

    res.status(httpStatus.CREATED).send(phoneRegister.rows[0]);
} 

export async function getPhonesByCostumer(req: Request, res: Response) {
    const { document } = req.params;
    const phones = await getPhonesBySomethingRep('customer_document', document);

    res.status(httpStatus.OK).send(phones.rows);
}