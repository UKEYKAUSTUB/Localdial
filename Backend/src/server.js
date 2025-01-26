const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();
const userRouter = require('./routes/userRoute');
const { default: mongoose } = require('mongoose');
const User = require('./models/User'); 
const cors=require('cors')

const app = express();
app.use(cors({
     origin: 'http://localhost:5173', // Allow requests from Vite dev server
  credentials: true,              // Include credentials if needed
}));
app.use(express.json());

const port = process.env.PORT || 4000;
connectDB();
app.use("/api/v1/auth", userRouter);
app.get('/', (req, res) => {
    console.log("hello world!");
    res.send("Hello world !")
})

app.listen(port, (error) => {
    if (error) {
        console.log("error in starting server");
        process.exit(1);
    }
    console.log(`server running at http://localhost:${port}`);
})









/* app.post('/api/v1/auth', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validate required fields
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields (name, email, password) are required." });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User with this email already exists." });
        }

        // Create a new user
        const newUser = new User({ name, email, password });
        const savedUser = await newUser.save();

        res.status(201).json({
            message: "User created successfully",
            user: savedUser,
        });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Internal server error", error });
    }
}); */

