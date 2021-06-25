import { request } from "express";
import { getCustomRepository } from "typeorm"
import { ComplimentRepositories } from "../../repositories/ComplimentRepositories";

class ListUserSendComplimentsService {
    async execute(user_id: string) {
        const complimentRepositories = getCustomRepository(ComplimentRepositories);

        const compliments = await complimentRepositories.find({
            where: {
                user_sender: user_id
            }, relations: ["tag", "userReceiver", "userSender"]
        })
        return compliments
    }
}
export { ListUserSendComplimentsService }
