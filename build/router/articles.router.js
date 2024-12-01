"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.articlesRouter = void 0;
const express_1 = __importDefault(require("express"));
const getAll_1 = require("../controller/articles/getAll");
const ajouter_1 = require("../controller/articles/ajouter");
exports.articlesRouter = express_1.default.Router();
exports.articlesRouter.get("/", getAll_1.getAllArticles);
exports.articlesRouter.post("/ajouter", ajouter_1.addArticleToCart);
