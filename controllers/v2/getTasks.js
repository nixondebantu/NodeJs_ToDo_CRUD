const getListOfTasks = require("../../db/getListOfTasks");

const getTasks = async (req,res)=>{
    const id = req.id;
    try {
        const list = await getListOfTasks(id);
        return res.status(200).json(list);
    } catch (error) {
        console.error("Error getting pending user list:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = getTasks;