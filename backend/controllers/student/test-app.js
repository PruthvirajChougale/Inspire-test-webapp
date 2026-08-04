import { createUser } from "../../models/users.js";

export const addUser = async (req, res) => {
    try {
        const userData = {
            username: req.body.username,
            email: req.body.email,
            passwordHash: req.body.password, // 💡 Maps 'password' from request body to 'passwordHash' in Prisma
            batchId: req.body.batchId
        };

        // 💡 1. Must await the async database call
        const result = await createUser(userData);

        // 💡 2. Return HTTP 201 response to client
        return res.status(201).json({
            success: true,
            data: result
        });
    } catch (e) {
        console.error("Error in addUser controller:", e);
        
        // 💡 3. Return HTTP 400/500 error response
        return res.status(400).json({
            success: false,
            message: e.message
        });
    }
};