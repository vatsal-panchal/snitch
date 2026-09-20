import { Router } from "express";
import { registerController } from "../controllers/auth.controller.js";
import { registerValidator } from "../validators/auth.validator.js";
const router = Router();

router.post("/register", registerValidator, registerController);

export default router;
