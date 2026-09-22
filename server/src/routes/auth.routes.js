import { Router } from "express";
import {
  getMeController,
  loginController,
  refreshController,
  registerController,
} from "../controllers/auth.controller.js";
import {
  loginValidator,
  registerValidator,
} from "../validators/auth.validator.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
const router = Router();

/**
 * @POST /api/auth/register
 */
router.post("/register", registerValidator, registerController);

/**
 * @POST /api/auth/login
 */
router.post("/login", loginValidator, loginController);

/**
 * @POST /api/auth/refresh
 */

router.post("/refresh", refreshController);

/**
 * @GET /api/auth/me
 */

router.get("/me", authMiddleware, getMeController);

export default router;
