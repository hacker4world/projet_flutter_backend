"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commandeRouter = void 0;
const express_1 = __importDefault(require("express"));
const submit_1 = require("../controller/commande/submit");
const getAll_1 = require("../controller/commande/getAll");
exports.commandeRouter = express_1.default.Router();
exports.commandeRouter.post("/submit", submit_1.submit);
exports.commandeRouter.get("/", getAll_1.getAllOrders);
