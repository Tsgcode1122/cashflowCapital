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

exports.getAllUserDashboardDetails = async (req, res) => {
  try {
    // Fetch all user dashboard details
    const allUserDashboards = await UserDashboardDetails.find();

    if (!allUserDashboards || allUserDashboards.length === 0) {
      return res
        .status(404)
        .json({ message: "No user dashboard details found" });
    }

    res.status(200).json(allUserDashboards);
  } catch (error) {
    console.error("Error fetching all user dashboard details:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
