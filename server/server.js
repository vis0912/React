import express from "express"
import router from "./router/auth-router.js"
const app= express();
const PORT=5000

app.use(express.json())
app.use("/api/auth",router)

app.listen(PORT,(req,res)=>{
    console.log((`App listening on port:${PORT}`))
})