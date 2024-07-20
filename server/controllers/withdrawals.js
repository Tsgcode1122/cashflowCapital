const UserWithdrawal = require("../models/UserWithdrawal");
const UserDashboardDetails = require("../models/UserDashboardDetails");

const getWithdrawalSummary = async (req, res) => {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ message: "User ID is required" });
  }

  try {
    const userWithdrawal = await UserWithdrawal.findOne({ userId });

    if (!userWithdrawal) {
      return res
        .status(404)
        .json({ message: "No withdrawal records found for this user" });
    }

    const withdrawals = userWithdrawal.withdrawals.map((withdrawal) => ({
      amount: withdrawal.amount,
      accountNumber: withdrawal.accountNumber,
      bank: withdrawal.bank,
      accountName: withdrawal.accountName,
      requestedAt: withdrawal.requestedAt,
      status: withdrawal.status,
    }));

    res.status(200).json({ withdrawals });
  } catch (error) {
    console.error("Error fetching withdrawal summary:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getTotalEarnings = async (req, res) => {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ message: "User ID is required" });
  }

  try {
    // Find the user dashboard details by userId
    const userDashboard = await UserDashboardDetails.findOne({ userId });

    if (!userDashboard) {
      return res
        .status(404)
        .json({ message: "User dashboard details not found" });
    }

    // Retrieve referredTotalCount and calculate total earnings
    const referredTotalCount = userDashboard.referredTotalCount || 0;
    const totalEarnings = referredTotalCount * 2;

    res.status(200).json({ totalEarnings });
  } catch (error) {
    console.error("Error fetching total earnings:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getUserWithdrawals = async (req, res) => {
  try {
    const withdrawals = await UserWithdrawal.find({});
    res.status(200).json(withdrawals);
  } catch (error) {
    console.error("Error fetching user withdrawals:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateWithdrawalStatus = async (req, res) => {
  const { withdrawalId } = req.params;
  const { status } = req.body;

  try {
    const userWithdrawal = await UserWithdrawal.findOne({
      "withdrawals._id": withdrawalId,
    });
    if (!userWithdrawal) {
      return res.status(404).json({ message: "Withdrawal not found" });
    }

    const withdrawal = userWithdrawal.withdrawals.id(withdrawalId);
    withdrawal.status = status;
    await userWithdrawal.save();

    res.status(200).json({ message: "Withdrawal status updated successfully" });
  } catch (error) {
    console.error("Error updating withdrawal status:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getWithdrawalSummary,
  getTotalEarnings,
  getUserWithdrawals,
  updateWithdrawalStatus,
};
