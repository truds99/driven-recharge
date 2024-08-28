import httpStatus from "http-status";
import { Request, Response } from "express";
import { postPhoneService } from "../services/phones-service";

export async function postPhone(req: Request, res: Response) {
    await postPhoneService(req.body);
    res.sendStatus(httpStatus.CREATED);
} 