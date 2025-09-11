const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Register new user
exports.userCreate = async (req, resp) => {
    try {
        const { name, email, password, role } = req.body;

        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return resp.status(400).json({ message: "User already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({ name, email, password: hashedPassword, role });
        await newUser.save();

        resp.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        resp.status(500).json({ message: error.message });
    }
};

// Login user
exports.login = async (req, resp) => {
    try {
        const { email, password } = req.body;

        // Find user
        const user = await User.findOne({ email });
        if (!user) {
            return resp.status(400).json({ message: "Invalid Email" });
        }

        // Compare password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return resp.status(400).json({ message: "Invalid Password" });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id, email: user.email, role: user.role }, // payload
            process.env.JWT_SECRET,              // secret key
            { expiresIn: "1h" }                  // options
        );

        resp.status(200).json({
            message: "User logged in successfully",
            token,
        });
    } catch (error) {
        resp.status(500).json({ message: error.message });
    }
};

