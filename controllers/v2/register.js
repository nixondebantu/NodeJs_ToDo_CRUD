const bcrypt = require("bcrypt");
const createUser = require("../../db/createUser");
const findUserByEmail = require("../../db/findUserByEmail");

const register = async (req, res) => {
  const { username, email, password, confirm_password } = req.body;
  const role = "user";
  const approveStatus = false;
  if (
    username === null ||
    username === undefined ||
    email === null ||
    email === undefined ||
    password === null ||
    password === undefined
  ) {
    return res
      .status(400)
      .json({ message: "Provide username, email, password to create account" });
  }
  if (password !== confirm_password) {
    return res
      .status(400)
      .json({ error: "password and confirm password doesn't match." });
  }
  try {
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: "user with this email already exists. Use different email" });
    }
    const hashedPass = await bcrypt.hash(password, 8);
    const newUser = await createUser({
      username,
      email,
      password: hashedPass,
      role,
      approveStatus,
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.log("error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = register;