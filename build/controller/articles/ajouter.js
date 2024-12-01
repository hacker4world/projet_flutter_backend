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
exports.addArticleToCart = addArticleToCart;
const data_source_1 = require("../../data-source");
const panier_1 = require("../../entity/panier");
function addArticleToCart(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const { userId, articleId } = request.body;
        // @ts-ignore
        const user = yield data_source_1.userRepository.findOne({ where: { _id: userId } });
        if (!user)
            return response.status(404).json({
                message: "user was not found"
            });
        // @ts-ignore
        const article = yield data_source_1.articleRepository.findOne({ where: { _id: articleId } });
        if (!article)
            return response.status(404).json({
                message: "article was not found"
            });
        const newCartItem = new panier_1.Panier(userId, articleId);
        yield data_source_1.panierRepository.save(newCartItem);
        return response.status(200).json({
            message: "article added successfully",
        });
    });
}
