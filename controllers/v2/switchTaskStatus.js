const switchStatus = require("../../db/switchStatus");

const switchTaskStatus = async (req, res)=>{
    const id = req.id;
    const taskID = req.params.taskID;
    try {
        const message = await switchStatus(id, taskID);
        return res.status(200).json(message);
    } catch (error) {
        
    }
};

module.exports = switchTaskStatus;