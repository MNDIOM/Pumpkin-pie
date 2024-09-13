const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

// Register a new user
router.post("/register", async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, hashedPassword });
        await newUser.save();
        res.status(201).send("User registered successfully");
    } catch (error) {
        console.log("Error: " + error);
        res.status(400).send(error);
    }
});

// Authenticate user
router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).send("Invalid credentials");
        }
        const isMatch = await bcrypt.compare(password, user.hashedPassword);
        if (!isMatch) {
            return res.status(401).send("Invalid credentials");
        }
        res.status(200).send("Login successful");
    } catch (error) {
        console.log("Error: " + error);
        res.status(400).send(error);
    }
});

module.exports = router;
