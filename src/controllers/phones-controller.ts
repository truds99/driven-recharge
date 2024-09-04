import httpStatus from "http-status";
import { Request, Response } from "express";
import { getCarrierName, postPhoneService } from "../services/phones-service";
import { getPhonesBySomethingRep } from "../repositories/phones-repository";

export async function postPhone(req: Request, res: Response) {
    await postPhoneService(req.body);

    const { name, customer_document, number, carrier_id, description } = req.body;

    const phoneRegister = {
        customer: {
            name,
            document: customer_document
        },
        phone: {
            number,
            carrier: getCarrierName(carrier_id),
            description
        }
    }

    res.status(httpStatus.CREATED).send(phoneRegister);
} 

export async function getPhonesByCostumer(req: Request, res: Response) {
    const { document } = req.params;
    const phones = await getPhonesBySomethingRep('customer_document', document);

    res.status(httpStatus.OK).send(phones.rows);
}