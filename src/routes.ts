import { request, response, Router } from "express";
import { CreateUserController } from "./controller/User/CreateUserController";

const router = Router();

const createUserController = new CreateUserController();

router.post("/users", createUserController.handle);

export { router }