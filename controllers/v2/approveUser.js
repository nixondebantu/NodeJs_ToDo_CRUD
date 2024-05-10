const setApproveStatus = require("../../db/setApproveStatus");

const approveUser = async (req, res) => {
  const role = req.role;
  const id = req.params.id;
  if (role === "admin") {
    try {
      await setApproveStatus(id);
      return res.status(200).json({ message: "User approved successfully" });
    } catch (error) {
      console.error("Error getting pending user list:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    return res.status(400).json({ message: "Only admin can show the list" });
  }
};
module.exports = approveUser;
