"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_status_1 = __importDefault(require("http-status"));
function errorHandlerMiddleware(e, req, res, next) {
    if (e.name === 'conflict')
        return res.status(http_status_1.default.CONFLICT).send(e.message);
    if (e.name === 'not_found')
        return res.status(http_status_1.default.NOT_FOUND).send(e.message);
    if (e.name === 'unprocessable_entity')
        return res.status(http_status_1.default.UNPROCESSABLE_ENTITY).send(e.message);
    res.status(http_status_1.default.INTERNAL_SERVER_ERROR).send(e.message);
}
exports.default = errorHandlerMiddleware;
