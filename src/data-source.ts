import {DataSource} from "typeorm";
import {User} from "./entity/utilisateur";
import {Article} from "./entity/article";
import {Panier} from "./entity/panier";
import {Commande} from "./entity/commande";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "mini_projet",
    synchronize: true,
    logging: true,
    entities: [User, Article, Panier, Commande],
    subscribers: [],
    migrations: [],
})

export const userRepository = AppDataSource.getRepository(User);
export const articleRepository = AppDataSource.getRepository(Article);
export const panierRepository = AppDataSource.getRepository(Panier);
export const commandeRepository = AppDataSource.getRepository(Commande);