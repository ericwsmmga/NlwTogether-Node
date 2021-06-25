import { request } from "express";
import { getCustomRepository } from "typeorm"
import { ComplimentRepositories } from "../../repositories/ComplimentRepositories";

class ListUserReceiveComplimentsService {
    async execute(user_id: string) {
        const complimentRepositories = getCustomRepository(ComplimentRepositories);

        const compliments = await complimentRepositories.find({
            where: {
                user_receiver: user_id
            }
        })
        return compliments
    }
}
export { ListUserReceiveComplimentsService }
