const express = require("express");
const router = express.Router();
const User = require("../models/User"); // Import model

// API: Ambil semua user
router.get("/", async (req, res) => {
	const users = await User.find();
	res.json(users);
});

// API: Tambah user baru
router.post("/", async (req, res) => {
	const newUser = new User({name: req.body.name});
	await newUser.save();
	res.json({message: "User ditambahkan!", user: newUser});
});

module.exports = router;
