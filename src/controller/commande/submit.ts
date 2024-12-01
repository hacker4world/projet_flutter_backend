import express from "express";
import {commandeRepository, userRepository} from "../../data-source";
import {Commande} from "../../entity/commande";

export async function submit(request: express.Request, response: express.Response): Promise<any> {
    const { userId } = request.body;

    // @ts-ignore
    const user = await userRepository.findOne({ where: { _id: userId } });

    if (!user) return response.status(404).json({
        message: "Could not find user",
    });

    const commande = new Commande(userId, `${user.name} ${user.lastName}`);

    await commandeRepository.save(commande);

    return response.status(200).json({
        message: "your order has been submitted"
    })

}