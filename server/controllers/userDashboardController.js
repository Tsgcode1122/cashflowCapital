// controllers/userDashboardController.js

const UserDashboardDetails = require("../models/UserDashboardDetails");

exports.getUserDashboardDetails = async (req, res) => {
  const userId = req.params.userId;

  try {
    // Fetch user dashboard details based on userId
    const userDashboard = await UserDashboardDetails.findOne({ userId });

    if (!userDashboard) {
      return res
        .status(404)
        .json({ message: "User dashboard details not found" });
    }

    res.status(200).json(userDashboard);
  } catch (error) {
    console.error("Error fetching user dashboard details:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
