const express = require("express");
const app = express();
const port = 5001;

app.get("/", (req, res) => {
	res.send("Halo, Express!");
});

app.listen(port, () => {
	console.log(`Server berjalan di http://localhost:${port}`);
});
