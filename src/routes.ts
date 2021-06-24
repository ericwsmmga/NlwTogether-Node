import { request, response, Router } from "express";
import { CreateUserController } from "./controller/User/CreateUserController";
import { CreateTagController } from "./controller/Tag/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controller/Security/AuthenticateUserController.ts";
import { CreateComplimentController } from "./controller/Compliment/CreateComplimentController";

const router = Router();

const createUserController = new CreateUserController();
const createTafController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController

router.post("/users", createUserController.handle);
router.post("/tags", ensureAdmin, createTafController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", createComplimentController.handle);



export { router }