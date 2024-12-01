import express from "express";
import {articleRepository} from "../../data-source";

export async function getAllArticles(request: express.Request, response: express.Response): Promise<any> {
    let allArticles = await articleRepository.find();

    return response.status(200).json({
        articles: allArticles
    })

}