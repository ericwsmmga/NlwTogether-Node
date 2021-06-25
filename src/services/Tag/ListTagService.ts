import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../../repositories/TagsRepositories";
import { classToPlain } from "class-transformer";


class ListTagService {
    async execute() {
        const tagsRepositories = getCustomRepository(TagsRepositories);


        let tags = await tagsRepositories.find();

        return classToPlain(tags);
    }
}

export { ListTagService };
