import express from "express";
import authRouter from "./router/auth-router.js";
import contactRouter from "./router/contact-router.js";
import connectDB from "./utils/db.js";
import dotenv from "dotenv";
import errorMiddleware from "./middleware/error-middleware.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,POST",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/contact", contactRouter);
app.use(errorMiddleware);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port:${PORT}`);
  });
});
