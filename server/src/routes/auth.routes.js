import { Router } from "express";
import { loginController, registerController } from "../controllers/auth.controller.js";
import { loginValidator, registerValidator } from "../validators/auth.validator.js";
const router = Router();

router.post("/register", registerValidator, registerController);

router.post("/login",loginValidator,loginController)

export default router;
