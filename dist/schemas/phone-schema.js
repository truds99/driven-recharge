"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.postPhoneSchema = void 0;
var joi_1 = __importDefault(require("joi"));
var validDescriptions = ['personal', 'work', 'home', 'other'];
exports.postPhoneSchema = joi_1.default.object({
    name: joi_1.default.string().required().trim(),
    customer_document: joi_1.default.string().length(11).pattern(/^\d+$/).required(),
    carrier_id: joi_1.default.number().integer().positive().required(),
    number: joi_1.default.alternatives().try(joi_1.default.string().pattern(/^\d+$/).length(10).required(), joi_1.default.string().pattern(/^\d+$/).length(11).required()),
    description: (_a = joi_1.default.string()).valid.apply(_a, validDescriptions).required()
});
