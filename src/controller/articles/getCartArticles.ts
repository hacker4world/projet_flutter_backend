import express from "express";
import {articleRepository, panierRepository} from "../../data-source";

export async function getCartArticles(request: express.Request, response: express.Response): Promise<any> {
    const { userId } = request.params;

    // @ts-ignore
    const cart = await panierRepository.find({ where: { _userId: userId } });

    let articles = [];

    for (const article of cart) {
        // @ts-ignore
        const articleData = await articleRepository.findOne({ where: { _id: article.articleId } });
        articles.push(articleData);
    }

    return response.status(200).json({
        articles
    })

}