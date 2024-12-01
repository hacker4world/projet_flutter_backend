import "reflect-metadata";

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import {AppDataSource} from "./data-source";
import {authenticationRouter} from "./router/authentication.router";
import {articlesRouter} from "./router/articles.router";
import {commandeRouter} from "./router/commande.router";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/authentication", authenticationRouter);
app.use("/articles", articlesRouter);
app.use("/articles", commandeRouter);

AppDataSource.initialize()
.then(() => {
    app.listen(4000, function () {
        console.log("Server started on port: " + 4000);
    });
})
.catch(err => {
    console.log(err);
})