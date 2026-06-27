const jwt = require("jsonwebtoken");
const Department = require("../models/Department");



const departmentProtect = async (req, res) => {
    
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer"))
    {
        try {
            token = req.headers.authorization.split(" ")[1];

            
            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            // Get department data
            req.department = await Department.findById(decoded.department.id);

            if (!req.department) {
                return res.status(401).json({
                    message: "Department not found"
                })
            }

            next();
        } catch (error) {
            return res.status(401).json({
            message:"No token provided"
        });
        }
    }
}

module.exports = { departmentProtect }