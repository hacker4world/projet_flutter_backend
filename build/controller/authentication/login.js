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
exports.login = login;
const data_source_1 = require("../../data-source");
function login(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = request.body;
        // @ts-ignore
        const user = yield data_source_1.userRepository.findOne({ where: { _email: email } });
        if (!user)
            return response.status(404).json({
                message: "User does not exist",
            });
        if (user.password !== password) {
            return response.status(401).json({
                message: "Invalid password",
            });
        }
        user.password = "";
        return response.status(200).json({ user });
    });
}
