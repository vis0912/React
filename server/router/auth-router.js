// routes.js
import express from "express";
import authController from "../controller/auth-controller.js";
import {
  registerSchema,
  loginSchema,
  validate,
} from "../middleware/validator-middleware.js";

const router = express.Router();

router.route("/").get(authController.home);
router
  .route("/register")
  .post(validate(registerSchema), authController.register);
router.route("/login").post(validate(loginSchema), authController.login);

export default router;
