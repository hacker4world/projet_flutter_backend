"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCartArticles = getCartArticles;
const data_source_1 = require("../../data-source");
function getCartArticles(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const { userId } = request.params;
        // @ts-ignore
        const cart = yield data_source_1.panierRepository.find({ where: { _userId: userId } });
        let articles = [];
        for (const article of cart) {
            // @ts-ignore
            const articleData = yield data_source_1.articleRepository.findOne({ where: { _id: article.articleId } });
            articles.push(articleData);
        }
        return response.status(200).json({
            articles
        });
    });
}
