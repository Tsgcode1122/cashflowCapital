require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./db");
const session = require("express-session");
const app = express();
const PORT = process.env.PORT || 5006;
const { sessionStore } = require("./db");
app.set("trust proxy", 1);
app.use(cors());
app.use(express.json());

// routes
const authRoutes = require("./routes/auth");
const emailRoutes = require("./routes/emailRoutes");
const resetRoutes = require("./routes/resetRoutes");
const withdrawalRoutes = require("./routes/withdrawalRoutes");
const userDashboardRoutes = require("./routes/userDashboardRoutes");

// app use
app.get("/", (req, res) => res.send("hello"));
app.use("/api/withdrawals", withdrawalRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/email", emailRoutes);
app.use("/api/reset", resetRoutes);
app.use("/api/userDashboard", userDashboardRoutes);
// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});
