import express from "express";
import router from "./router/auth-router.js";
import connectDB from "./utils/db.js";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use("/api/auth", router);

connectDB().then(() => {
  app.listen(PORT, (req, res) => {
    console.log(`App listening on port:${PORT}`);
  });
});
