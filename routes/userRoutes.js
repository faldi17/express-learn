const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", async (req, res) => {
	try {
		const users = await User.find();
		res.json(users);
	} catch (error) {
		res.status(500).json({error: error.message});
	}
});

router.post("/", async (req, res) => {
	try {
		const {name} = req.body;
		if (!name)
			return res.status(400).json({error: "Name tidak boleh kosong!"});

		const newUser = new User({name});
		await newUser.save();

		res.status(201).json({
			message: "User berhasil ditambahkan!",
			user: newUser,
		});
	} catch (error) {
		res.status(500).json({error: error.message});
	}
});

module.exports = router;
