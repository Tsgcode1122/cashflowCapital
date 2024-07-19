const express = require("express");
const router = express.Router();
const { requestWithdrawal } = require("../controllers/withdrawalController");
const { getWithdrawalSummary } = require("../controllers/withdrawals");
// Route for requesting a withdrawal
router.post("/request-withdrawal", requestWithdrawal);
router.get("/summary", getWithdrawalSummary);
module.exports = router;
