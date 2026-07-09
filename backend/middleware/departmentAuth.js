const jwt = require("jsonwebtoken");
const Department = require("../models/Department");



const departmentProtect = async (req, res, next) => {
    
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer"))
    {
        try {
            token = req.headers.authorization.split(" ")[1];

            
            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            // Get department data
            req.department = await Department.findById(decoded.department.id).select("-password");

            if (!req.department) {
                return res.status(401).json({
                    success: false,
                    message: "Department not found",
                })
            }

            return next();
        } catch (error) {
            return res.status(401).json({
                success: false,
                message:"Invalid Token",
        });
        }
    }

    return res.status(401).json({
        success: false,
        message: "Token required",
    });
}

module.exports = { departmentProtect }