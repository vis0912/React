import express from "express";
import contactController from "../controller/contact-controller.js";
import { contactSchema, validate } from "../middleware/validator-middleware.js";

const contactRouter = express.Router();

contactRouter
  .route("/")
  .post(validate(contactSchema), contactController.contact);

export default contactRouter;
