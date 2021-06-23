import { request, response, Router } from "express";
import { CreateUserController } from "./controller/User/CreateUserController";
import { CreateTagController } from "./controller/Tag/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();

const createUserController = new CreateUserController();
const createTafController = new CreateTagController();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAdmin, createTafController.handle);

export { router }