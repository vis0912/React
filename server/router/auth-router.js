// routes.js
import express from "express";
import authController from "../controller/auth-controller.js";

const router = express.Router();

router.route("/").get(authController.home);
router.route("/register").get(authController.register);

export default router;
