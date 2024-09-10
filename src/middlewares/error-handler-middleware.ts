import httpStatus from "http-status";
import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../protocols/protocols'

function errorHandlerMiddleware(
  e: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) {
 
    if (e.name === 'conflict') return res.status(httpStatus.CONFLICT).send(e.message);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e.message);
}

export default errorHandlerMiddleware;
