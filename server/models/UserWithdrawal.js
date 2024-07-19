const mongoose = require("mongoose");

const withdrawalSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  withdrawals: [
    {
      amount: {
        type: Number,
        required: true,
      },
      accountNumber: {
        type: String,
        required: true,
      },
      bank: {
        type: String,
        required: true,
      },
      accountName: {
        type: String,
        required: true,
      },
      requestedAt: {
        type: Date,
        default: Date.now,
      },
      status: {
        type: String,
        enum: ["pending", "paid"],
        default: "pending",
      },
    },
  ],
});

module.exports = mongoose.model("UserWithdrawal", withdrawalSchema);
