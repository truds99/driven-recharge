import httpStatus from "http-status";
import { Request, Response } from "express";
import { buildSummary } from "../services/summary-service";

export async function getSummary(req: Request, res: Response) {
    const { document } = req.params;
    const summary = await buildSummary(document);

    res.status(httpStatus.OK).send(summary);
} 