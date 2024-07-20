const express = require("express");
const router = express.Router();
const {
  getWithdrawalSummary,
  getTotalEarnings,
  getUserWithdrawals,
  updateWithdrawalStatus,
} = require("../controllers/withdrawals");
const { requestWithdrawal } = require("../controllers/withdrawalController");
// Route for requesting a withdrawal
router.post("/request-withdrawal", requestWithdrawal);
// Route for getting the withdrawal summary
router.get("/summary", getWithdrawalSummary);

// Route for getting the total earnings
router.get("/total-earnings", getTotalEarnings);

// Route for getting all user withdrawals
router.get("/userwithdrawals", getUserWithdrawals);

// Route for updating the status of a withdrawal
router.post("/userwithdrawals/:withdrawalId/update", updateWithdrawalStatus);

module.exports = router;
