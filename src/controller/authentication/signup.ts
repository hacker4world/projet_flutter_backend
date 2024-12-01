import {userRepository} from "../../data-source";
import {User} from "../../entity/utilisateur";

export async function signup(request: any, response: any) {
    const { name, lastName, email, password, phoneNumber, accountType } = request.body;

    // @ts-ignore
    let existingUser = await userRepository.findOne({ where: { _email: email } });

    if (existingUser) return response.status(400).json({
        message: `Email already exists`,
    })

    let user= new User(name, lastName, email, password, phoneNumber, accountType);

    await userRepository.save(user);

    return response.status(200).json({
        message: "Sign up success",
    });

}