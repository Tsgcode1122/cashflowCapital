const UserWithdrawal = require("../models/UserWithdrawal");

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

module.exports = {
  getWithdrawalSummary,
};
