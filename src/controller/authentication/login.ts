import express from "express";
import {userRepository} from "../../data-source";

export async function login(request: express.Request, response: express.Response): Promise<any> {
    const { email, password } = request.body;

    // @ts-ignore
    const user = await userRepository.findOne({ where: { _email: email } });
    if (!user) return response.status(404).json({
        message: "User does not exist",
    });

    if (user.password !== password) {
        return response.status(401).json({
            message: "Invalid password",
        });
    }

    user.password = "";

    return response.status(200).json({user});

}