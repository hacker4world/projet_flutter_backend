"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const data_source_1 = require("./data-source");
const authentication_router_1 = require("./router/authentication.router");
const articles_router_1 = require("./router/articles.router");
const commande_router_1 = require("./router/commande.router");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use("/authentication", authentication_router_1.authenticationRouter);
app.use("/articles", articles_router_1.articlesRouter);
app.use("/articles", commande_router_1.commandeRouter);
data_source_1.AppDataSource.initialize()
    .then(() => {
    app.listen(4000, function () {
        console.log("Server started on port: " + 4000);
    });
})
    .catch(err => {
    console.log(err);
});
