"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commandeRepository = exports.panierRepository = exports.articleRepository = exports.userRepository = exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const utilisateur_1 = require("./entity/utilisateur");
const article_1 = require("./entity/article");
const panier_1 = require("./entity/panier");
const commande_1 = require("./entity/commande");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "mini_projet",
    synchronize: true,
    logging: true,
    entities: [utilisateur_1.User, article_1.Article, panier_1.Panier, commande_1.Commande],
    subscribers: [],
    migrations: [],
});
exports.userRepository = exports.AppDataSource.getRepository(utilisateur_1.User);
exports.articleRepository = exports.AppDataSource.getRepository(article_1.Article);
exports.panierRepository = exports.AppDataSource.getRepository(panier_1.Panier);
exports.commandeRepository = exports.AppDataSource.getRepository(commande_1.Commande);
