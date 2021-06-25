import { request, response, Router } from "express";
import { CreateUserController } from "./controller/User/CreateUserController";
import { CreateTagController } from "./controller/Tag/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controller/Security/AuthenticateUserController.ts";
import { CreateComplimentController } from "./controller/Compliment/CreateComplimentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserSendComplimentsController } from "./controller/Compliment/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controller/Compliment/ListUserReceiveComplimentsController";
import { ListTagController } from "./controller/Tag/ListTagController";
import { ListUserService } from "./services/User/ListUserService";
import { ListUserController } from "./controller/User/ListUserController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listTagController = new ListTagController()
const listUserController = new ListUserController()


router.post("/users", createUserController.handle);
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", ensureAuthenticated, createComplimentController.handle);
router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentsController.handle);
router.get("/users/compliments/receive", ensureAuthenticated, listUserReceiveComplimentsController.handle);
router.get("/tags", ensureAuthenticated, listTagController.handle);
router.get("/users", ensureAuthenticated, listUserController.handle);
export { router }
