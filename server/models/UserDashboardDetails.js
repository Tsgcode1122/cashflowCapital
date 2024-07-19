const mongoose = require("mongoose");

const userDashboardDetailsSchema = new mongoose.Schema(
  {
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
    balance: {
      type: Number,
      default: 0,
    },
    referralLink: {
      type: String,
      required: true,
    },
    referredChain: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    referredChainCount: {
      type: Number,
      default: 0,
    },
    referredTotalCount: {
      type: Number,
      default: 0,
    },
    withdrawalRequest: [
      {
        amount: Number,
        requestedAt: {
          type: Date,
          default: Date.now,
        },
        status: {
          type: String,
          enum: ["pending", "approved", "rejected"],
          default: "pending",
        },
      },
    ],
    withdrawalPaid: [
      {
        amount: Number,
        paidAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    withdrawalSummary: [
      {
        type: String,
      },
    ],
    accountNumber: {
      type: String,
    },
    bank: {
      type: String,
    },
    accountName: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model(
  "UserDashboardDetails",
  userDashboardDetailsSchema,
);
