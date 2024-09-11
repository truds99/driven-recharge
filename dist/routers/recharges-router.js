"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rechargesRouter = void 0;
var express_1 = require("express");
var schemas_middleware_1 = __importDefault(require("../middlewares/schemas-middleware"));
var recharges_controller_1 = require("../controllers/recharges-controller");
var recharge_schema_1 = require("../schemas/recharge-schema");
exports.rechargesRouter = (0, express_1.Router)();
exports.rechargesRouter.post('/recharges', (0, schemas_middleware_1.default)(recharge_schema_1.postRechargeSchema), recharges_controller_1.postRecharge);
exports.rechargesRouter.get('/recharges/:number', recharges_controller_1.getRechargesByNumber);
