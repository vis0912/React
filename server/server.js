import express from "express";
import router from "./router/auth-router.js";
import connectDB from "./utils/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/auth", router);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port:${PORT}`);
  });
});
