// routes.js
import express from "express";
import authController from "../controller/auth-controller.js";
import contactController from "../controller/contact-controller.js";
import {
  registerSchema,
  loginSchema,
  validate,
} from "../middleware/validator-middleware.js";

const authRouter = express.Router();

authRouter.route("/").get(authController.home);
authRouter
  .route("/register")
  .post(validate(registerSchema), authController.register);
authRouter.route("/login").post(validate(loginSchema), authController.login);

export default authRouter;
