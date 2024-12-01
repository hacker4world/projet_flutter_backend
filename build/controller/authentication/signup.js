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
exports.signup = signup;
const data_source_1 = require("../../data-source");
const utilisateur_1 = require("../../entity/utilisateur");
function signup(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, lastName, email, password, phoneNumber, accountType } = request.body;
        // @ts-ignore
        let existingUser = yield data_source_1.userRepository.findOne({ where: { _email: email } });
        if (existingUser)
            return response.status(400).json({
                message: `Email already exists`,
            });
        let user = new utilisateur_1.User(name, lastName, email, password, phoneNumber, accountType);
        yield data_source_1.userRepository.save(user);
        return response.status(200).json({
            message: "Sign up success",
        });
    });
}
