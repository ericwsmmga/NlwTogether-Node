import { compare } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories";
import { sign } from "jsonwebtoken"
interface IAuthenticateRequest {
    email: string;
    password: string;
}
class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories);

        const user = await usersRepositories.findOne({
            email
        });

        if (!user) {
            throw new Error("Email/Password incorrect");
        }

        const passwordMatch = await compare(password, user.password)

        if (!password) {
            throw new Error("Email/Password incorrect");
        }

        const token = sign({
            email: user.email
        }, "5616f334344f2237d99da5fc742741fd", { subject: user.id, expiresIn: "1d" })

        return token;

    }
}
export { AuthenticateUserService }
