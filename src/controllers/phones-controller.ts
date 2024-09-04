import httpStatus from "http-status";
import { Request, Response } from "express";
import { getCarrierName, postPhoneService } from "../services/phones-service";

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