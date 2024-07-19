const express = require("express");
const router = express.Router();
const { requestWithdrawal } = require("../controllers/withdrawalController");

// Route for requesting a withdrawal
router.post("/request-withdrawal", requestWithdrawal);

module.exports = router;
