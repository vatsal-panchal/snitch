import { Router } from "express";
import { loginController, registerController } from "../controllers/auth.controller.js";
import { loginValidator, registerValidator } from "../validators/auth.validator.js";
const router = Router();


/**
 * @POST /api/auth/register
 */
router.post("/register", registerValidator, registerController);

/**
 * @POST /api/auth/login
 */
router.post("/login",loginValidator,loginController)

/**
 * @POST /api/auth/refresh
 */

router.post("/refresh",)

export default router;
