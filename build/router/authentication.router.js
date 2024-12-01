"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticationRouter = void 0;
const express_1 = require("express");
const signup_1 = require("../controller/authentication/signup");
const login_1 = require("../controller/authentication/login");
exports.authenticationRouter = (0, express_1.Router)();
exports.authenticationRouter.post("/signup", signup_1.signup);
exports.authenticationRouter.post("/login", login_1.login);
