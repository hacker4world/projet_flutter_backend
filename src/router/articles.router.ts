import express from "express";
import {getAllArticles} from "../controller/articles/getAll";
import {addArticleToCart} from "../controller/articles/ajouter";
import {getCartArticles} from "../controller/articles/getCartArticles";

export const articlesRouter = express.Router();

articlesRouter.get("/", getAllArticles);

articlesRouter.post("/ajouter", addArticleToCart);

articlesRouter.get("/panier/:userId", getCartArticles)