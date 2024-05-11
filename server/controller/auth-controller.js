const home = async (req, res) => {
    try {
      res.status(200).send("Welcome to Home router using controller");
    } catch (error) {
      console.log(error);
    }
  };
const register = async (req, res) => {
  res.status(200).json({ message: "Welcome to Registration router using controller" });
};
  
  const authController = { home,register };
  
  export default authController;
  