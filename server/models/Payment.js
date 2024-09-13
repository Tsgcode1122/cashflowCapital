const mongoose = require("mongoose");
const { Schema } = mongoose;

// Subscription Plan Schema
const subscriptionSchema = new Schema({
  planName: {
    type: String,
    required: true,
  },
  isSubscribed: {
    type: Boolean,
    default: false,
  },
  subscriptionDate: {
    type: Date,
    default: null,
  },
  expireDate: {
    type: Date,
    default: null,
  },
});

// Payment Schema
const paymentSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Assuming you have a 'User' model
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  subscriptions: {
    type: [subscriptionSchema],
    default: [
      { planName: "Crypto", isSubscribed: false },
      { planName: "Forex", isSubscribed: false },
      { planName: "Stock", isSubscribed: false },
      { planName: "Full Access", isSubscribed: false },
    ],
  },
});

// Function to update subscription on payment
paymentSchema.methods.subscribeToPlan = function (planName) {
  const subscription = this.subscriptions.find(
    (sub) => sub.planName === planName,
  );
  if (subscription) {
    subscription.isSubscribed = true;
    subscription.subscriptionDate = new Date(); // Subscription date = now
    subscription.expireDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // Set expire date to 1 month later
  }
  return this.save();
};

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
