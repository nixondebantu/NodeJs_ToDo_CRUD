const getListOfUsers = require("../../db/getListOfUsers");

const getUsersList = async (req, res) => {
    const role = req.role;
    if (role === "admin") {
      try {
        const list = await getListOfUsers();
        return res.status(200).json(list);
      } catch (error) {
        console.error("Error getting pending user list:", error);
        return res.status(500).json({ message: "Internal Server Error" });
      }
    } else {
      return res.status(400).json({ message: "Only admin can show the list" });
    }
};

module.exports = getUsersList;
