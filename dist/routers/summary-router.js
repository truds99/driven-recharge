"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.summaryRouter = void 0;
var summary_controller_1 = require("../controllers/summary-controller");
var express_1 = require("express");
exports.summaryRouter = (0, express_1.Router)();
exports.summaryRouter.get('/summary/:document', summary_controller_1.getSummary);
