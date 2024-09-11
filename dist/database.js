"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = __importDefault(require("pg"));
var dotenv_1 = __importDefault(require("dotenv"));
var Pool = pg_1.default.Pool;
dotenv_1.default.config();
var db = new Pool({
    connectionString: process.env.DATABASE_URL,
});
db.connect()
    .then(function (client) {
    console.log('Successfully connected to the database');
    client.release();
})
    .catch(function (err) {
    console.error('Failed to connect to the database', err);
});
exports.default = db;
