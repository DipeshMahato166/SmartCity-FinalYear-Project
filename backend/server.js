const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors")
const userRoutes = require("./routes/userRoutes")

dotenv.config();
const app = express();
app.use(express.json());

app.use(cors());

const PORT = process.env.PORT || 3000;


// MongoDB connection
connectDB()



app.get("/", (req, res) => {
  res.send("Welcom back Raja")
})

// API Routes
app.use("/api/users", userRoutes)



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
