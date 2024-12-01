import express from "express";
import {articleRepository, panierRepository, userRepository} from "../../data-source";
import {Panier} from "../../entity/panier";

export async function addArticleToCart(request: express.Request, response: express.Response): Promise<any> {
    const { userId, articleId } = request.body;

    // @ts-ignore
    const user = await userRepository.findOne({ where: { _id: userId } });

    if (!user) return response.status(404).json({
        message: "user was not found"
    });

    // @ts-ignore
    const article = await articleRepository.findOne({ where: { _id: articleId } });

    if (!article) return response.status(404).json({
        message: "article was not found"
    });

    const newCartItem = new Panier(userId, articleId);

    await panierRepository.save(newCartItem);

    return response.status(200).json({
        message: "article added successfully",
    })

}