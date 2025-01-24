const User = require("../models/User");
const LoginController = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check if the email exists in the database
      const existingUser = await User.findOne({ email });
      if (!existingUser) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }
  
      // Verify the password (direct comparison since there's no hashing)
      if (existingUser.password !== password) {
        return res.status(401).json({
          success: false,
          message: "Invalid credentials",
        });
      }
  
      // Successful login
      res.status(200).json({
        success: true,
        message: "Login successful",
        user: {
          id: existingUser._id,
          name: existingUser.name,
          email: existingUser.email,
        },
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error during login",
      });
    }
  };
  
  module.exports = LoginController;

