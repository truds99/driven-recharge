"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.phonesRouter = void 0;
var express_1 = require("express");
var phones_controller_1 = require("../controllers/phones-controller");
var schemas_middleware_1 = __importDefault(require("../middlewares/schemas-middleware"));
var phone_schema_1 = require("../schemas/phone-schema");
var phones_controller_2 = require("../controllers/phones-controller");
exports.phonesRouter = (0, express_1.Router)();
exports.phonesRouter.post('/phones', (0, schemas_middleware_1.default)(phone_schema_1.postPhoneSchema), phones_controller_1.postPhone);
exports.phonesRouter.get('/phones/:document', phones_controller_2.getPhonesByCostumer);
