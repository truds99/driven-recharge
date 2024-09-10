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
    if (e.name === 'not_found') return res.status(httpStatus.NOT_FOUND).send(e.message);
    if (e.name === 'unprocessable_entity') return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(e.message);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e.message);
}

export default errorHandlerMiddleware;
