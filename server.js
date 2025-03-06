const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5001;

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => console.log("🔥 MongoDB Connected"))
	.catch((err) => console.error("❌ MongoDB Connection Error:", err));

app.use(express.json());

const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes);

app.get("/", (req, res) => {
	res.send("Server jalan! 🚀");
});

app.listen(PORT, () => {
	console.log(`Server berjalan di http://localhost:${PORT}`);
});
