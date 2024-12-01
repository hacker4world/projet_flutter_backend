import {Router} from "express";
import {signup} from "../controller/authentication/signup";
import {login} from "../controller/authentication/login";

export const authenticationRouter = Router();

authenticationRouter.post("/signup", signup);
authenticationRouter.post("/login", login);