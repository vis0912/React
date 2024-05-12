import User from "../models/user-model.js";
import bcrypt from "bcryptjs";
import errorMiddleware from "../middleware/error-middleware.js"; // Import your error middleware

const home = async (req, res, next) => {
  try {
    res.status(200).send("Welcome to Home router using controller");
  } catch (error) {
    next(error); // Send the error to the error middleware
  }
};

const register = async (req, res, next) => {
  try {
    const { username, email, mobile, password } = req.body;

    const existingEmail = await User.findOne({ email });

    if (existingEmail) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    const newUser = await User.create({
      username,
      email,
      mobile,
      password,
    });

    res.status(200).json({
      message: "Successfully created new user",
      user: newUser,
      token: await newUser.generateToken(),
      userId: newUser._id.toString(),
    });
  } catch (error) {
    next(error); // Send the error to the error middleware
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }

    const isMatch = await existingUser.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({ msg: "BAD credentials" });
    }

    res.status(200).json({
      msg: "Successfully Logged in",
      user: existingUser.username,
      token: await existingUser.generateToken(),
      userId: existingUser._id.toString(),
    });
  } catch (error) {
    next(error); // Send the error to the error middleware
  }
};

const authController = { home, register, login};

export default authController;
