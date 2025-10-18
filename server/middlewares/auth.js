import jwt from 'jsonwebtoken'

const userAuth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization || req.headers.token;

        if (!authHeader) {
            return res.json({
                success: false,
                message: "Not Authorized, Login Again"
            });
        }

        const token = authHeader.startsWith("Bearer")
            ? authHeader.split(" ")[1]
            : authHeader;

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;

        next();
    } catch (error) {
        return res.json({
            success: false,
            message: "Invalid or expired token: " + error.message
        });
    }
};

export default userAuth;
