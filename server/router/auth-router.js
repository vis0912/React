// routes.js
import express from "express";
import authController from "../controller/auth-controller.js";
import validate from "../middleware/validator-middleware.js"

const router = express.Router();

router.route("/").get(authController.home);
router.route("/register").post(validate(),authController.register);
router.route("/login").post(authController.login);

export default router;
