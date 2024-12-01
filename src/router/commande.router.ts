import express from "express";
import {submit} from "../controller/commande/submit";
import {getAllOrders} from "../controller/commande/getAll";

export const commandeRouter = express.Router();

commandeRouter.post("/submit", submit);
commandeRouter.get("/", getAllOrders);
