const express = require("express");
const app = express();
const port = 5001;

app.get("/", (req, res) => {
	res.send("Halo, Express!");
});

app.listen(port, () => {
	console.log(`Server berjalan di http://localhost:${port}`);
});

// buat route
const users = [
	{id: 1, name: "Guntur"},
	{id: 2, name: "Kaling"},
	{id: 3, name: "Erlangga"},
];

app.get("/users", (req, res) => {
	res.json(users);
});
