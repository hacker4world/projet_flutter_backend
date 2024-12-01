import express from "express";
import {getAllArticles} from "../controller/articles/getAll";
import {addArticleToCart} from "../controller/articles/ajouter";

export const articlesRouter = express.Router();

articlesRouter.get("/", getAllArticles);

articlesRouter.post("/ajouter", addArticleToCart);