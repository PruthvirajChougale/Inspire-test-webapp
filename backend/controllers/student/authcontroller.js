import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import User from '../../models/users.js'

const generatetoken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    return token;
}

export const signup = async (req, res) => {
    try {
        const { name, email, password, userId, role } = req.body;

        if (!name || !email || !password || !userId) {
            return res.status(400).json({ message: 'Name, email, password, and user ID are required' });
        }

        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            name,
            email,
            password: hashedpassword,
            userId,
            role: role || 'Student',
        });

        if (newUser) {
            generatetoken(newUser._id, res);
            res.status(201).json({
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role,
                userId: newUser.userId,
            });
        } else {
            res.status(400).json({ message: 'Failed to create user' });
        }
    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
}


export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        generatetoken(user._id, res);
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            userId: user.userId,
        });

    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
}


export const logout = (req, res) => {
    try {
        res.clearCookie("token");
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};