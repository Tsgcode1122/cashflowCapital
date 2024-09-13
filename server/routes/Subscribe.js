const express = require("express");
const router = express.Router();
const {
  updateSubscription,
  getUserSubscriptions,
} = require("../controllers/paymentController");

// Route to update subscription after payment
router.post("/update-subscription", updateSubscription);

// Route to get all subscriptions for a user
router.get("/subscriptions/:userId", getUserSubscriptions);

module.exports = router;
