import express from "express";
import {articleRepository, commandeRepository} from "../../data-source";

export async function getAllOrders(request: express.Request, response: express.Response): Promise<any> {
    const commandes = await commandeRepository.find();

    return response.status(200).json({
        commandes
    });

}