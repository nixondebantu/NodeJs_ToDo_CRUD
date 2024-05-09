const pool = require("./dbconnect");
const bcrypt = require("bcrypt");

const userValidation = async (email, password) => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );
    const passValidation = await bcrypt.compare(password, rows[0].password);
    if (passValidation) {
      return {
        isVaild: true,
        id: rows[0].id,
        username: rows[0].username,
        role: rows[0].role,
        approveStatus: rows[0].approveStatus,
      };
    } else {
      return {
        isVaild: false,
      };
    }
  } catch (error) {
    console.log("Error validating user:", error);
  } finally {
    connection.release();
  }
};

module.exports = userValidation;
