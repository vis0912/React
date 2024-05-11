import User from "../models/user-model.js"
import bcrypt from "bcryptjs"

const home = async (req, res) => {
    try {
      res.status(200).send("Welcome to Home router using controller");
    } catch (error) {
      console.log(error);
    }
  };
const register = async (req, res) => {

  const {username,email,mobile,password}=req.body

  const existingEmail= await User.findOne({email})

  if(existingEmail){
    return res.status(400).json({msg:"Email already exists"})
  }

  const saltRound= await bcrypt.genSalt(10)
  const hashedPassword= await bcrypt.hash(password,saltRound)

  const newUser=await User.create({
    username,
    email,
    mobile,
    password:hashedPassword
  })

  res.status(200).json({ message: "Successfully created new user", user:newUser });
};
  
  const authController = { home,register };
  
  export default authController;
  