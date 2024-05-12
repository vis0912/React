import { z } from "zod";

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
    // Handle validation errors
    console.error(error);
    const message = error.errors[0].message;
    res.status(400).json({ error: message });
  }
};

export { registerSchema, loginSchema, validate };
