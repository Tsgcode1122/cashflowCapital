const Payment = require("../models/Payment");
const moment = require("moment");

// Controller to update or create a subscription
const updateSubscription = async (req, res) => {
  const { userId, email, subscriptionPlanId } = req.body;

  try {
    // Find the user's existing subscription by userId and email
    let payment = await Payment.findOne({ userId, email });

    // If no subscription found, create a new subscription record
    if (!payment) {
      payment = new Payment({
        userId,
        email,
        subscriptionPlanId,
        subscriptionStatus: "active",
        startDate: new Date(),
        endDate: moment().add(1, "month").toDate(), // End date is one month after start date
      });

      await payment.save();
      return res
        .status(201)
        .json({ message: "New subscription created successfully", payment });
    }

    // If the user already exists, update their subscription
    // Check if the user is already subscribed to the same plan
    if (payment.subscriptionPlanId === subscriptionPlanId) {
      return res
        .status(400)
        .json({ message: "User is already subscribed to this plan" });
    }

    // Update subscription details
    payment.subscriptionPlanId = subscriptionPlanId;
    payment.subscriptionStatus = "active";
    payment.startDate = new Date();
    payment.endDate = moment().add(1, "month").toDate();

    await payment.save();

    return res
      .status(200)
      .json({ message: "Subscription updated successfully", payment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Controller to get all subscriptions for a user
const getUserSubscriptions = async (req, res) => {
  const { userId } = req.params;

  try {
    // Find all subscription records by userId
    const payments = await Payment.find({ userId });

    // If no subscriptions are found
    if (!payments || payments.length === 0) {
      return res
        .status(404)
        .json({ message: "No subscriptions found for this user" });
    }

    // Return all subscription details for the user
    return res
      .status(200)
      .json({ message: "User subscriptions fetched successfully", payments });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { updateSubscription, getUserSubscriptions };
