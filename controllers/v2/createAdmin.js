const bcrypt = require("bcrypt");
const createUser = require("../../db/createUser");
const findUserByEmail = require("../../db/findUserByEmail");

const createAdmin = async (req, res) => {
  const username = "admin";
  const email = "admin@gmail.com";
  const password = "1234";
  const role = "admin";
  const approveStatus = true;
  try {
    const availbleAdmin = await findUserByEmail(email);
    if (availbleAdmin) {
      return res.status(400).json({ error: "admin already exists" });
    }
    const hashedPass = await bcrypt.hash(password, 8);
    const newAdmin = await createUser({
      username,
      email,
      password: hashedPass,
      role,
      approveStatus,
    });
    res.status(201).json({username,email,password,role,approveStatus});
  } catch (error) {
    console.log("error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = createAdmin;