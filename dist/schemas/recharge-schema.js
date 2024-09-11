"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRechargeSchema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.postRechargeSchema = joi_1.default.object({
    phone_id: joi_1.default.number().integer().positive().required(),
    value: joi_1.default.number().integer().positive().required().min(1000).max(100000)
});
