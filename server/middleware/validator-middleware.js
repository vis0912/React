import { z } from "zod";
import errorMiddleware from "./error-middleware.js";

// Define validation schema
const registerSchema = z.object({
  username: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(3, { message: "At least 3 characters required" })
    .trim(),

  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email({ message: "Enter a valid email address" }),

  mobile: z
    .string({
      required_error: "Mobile is required",
      invalid_type_error: "Mobile must be a string",
    })
    .min(10, { message: "Exactly 10 digits required" })
    .max(10, { message: "Cannot be more than 10 digits" }),

  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string",
    })
    .min(8, { message: "Password must be at least 8 characters long" }),
});

const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email({ message: "Enter a valid email address" }),

  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string",
    })
    .min(8, { message: "Password must be at least 8 characters long" }),
});

// Middleware for validation
const validate = (schema) => async (req, res, next) => {
  try {
    // Parse request body using the defined schema
    const parsedBody = await schema.parseAsync(req.body);
    // Replace request body with parsed body
    req.body = parsedBody;
    // Proceed to the next middleware
    next();
  } catch (error) {
    const status = 401;
    const message = "Something wrong";
    const extraDetails = error.errors[0].message;

    const err = { status, message, extraDetails };
    next(err);
  }
};

export { registerSchema, loginSchema, validate };
