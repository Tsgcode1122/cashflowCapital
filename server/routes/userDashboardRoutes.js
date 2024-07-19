// routes/userDashboardRoutes.js

const express = require("express");
const router = express.Router();
const userDashboardController = require("../controllers/userDashboardController");

// Route to get user dashboard details
router.get(
  "/dashboard/:userId",
  userDashboardController.getUserDashboardDetails,
);

module.exports = router;
