const express = require("express");
const router = express.Router();
const userDashboardController = require("../controllers/userDashboardController");

// Route to get user dashboard details
router.get(
  "/dashboard/:userId",
  userDashboardController.getUserDashboardDetails,
);

// Route to get all users' dashboard details
router.get("/all", userDashboardController.getAllUserDashboardDetails);

module.exports = router;
