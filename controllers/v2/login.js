const jwt = require("jsonwebtoken");
const userValidation = require("../../db/userValidation");
require('dotenv').config();
const secret = process.env.SECRET;

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const response = await userValidation(email, password);
    if (response.isVaild) {
      if (response.approveStatus) {
        const token = jwt.sign(
          { id: response.id, role: response.role },
          secret,
          { expiresIn: "1h" }
        );
        return res
          .status(200)
          .json({ message: `Welcome ${response.username}.`, token });
      } else {
        return res
          .status(200)
          .json({ message: "Your account has not approved by admin yet" });
      }
    } else {
      return res.status(400).json({ message: "Invalid credential" });
    }
  } catch (error) {
    console.log("error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = login;
