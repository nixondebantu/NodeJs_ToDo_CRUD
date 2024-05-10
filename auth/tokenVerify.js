const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

const tokenVerify = (req, res, next) =>{
    const { authorization } = req.headers;
    try {
        const token = authorization.split(' ')[1];
        const decoded = jwt.verify(token, secret);
        const { id, role } = decoded;
        req.id = id;
        req.role = role;
        next();
    } catch {
        next('Authentication Failure');
    }
};

module.exports = tokenVerify;