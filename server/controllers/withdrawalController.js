const nodemailer = require("nodemailer");
const express = require("express");
require("dotenv").config();
const User = require("../models/User");
const UserDashboardDetails = require("../models/UserDashboardDetails");
const UserWithdrawal = require("../models/UserWithdrawal");

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const requestWithdrawal = async (req, res) => {
  const {
    userId,
    amount,
    accountNumber,
    bank,
    accountName,
    userEmail,
    userName,
  } = req.body;

  // Basic validation
  if (!userId || !amount || !accountNumber || !bank || !accountName) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Validate the amount
  if (isNaN(amount) || amount <= 0) {
    return res.status(400).json({ message: "Invalid amount" });
  }

  const adminEmail = "falolatosin8@gmail.com";

  try {
    // Send the withdrawal request details to the admin email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: adminEmail,
      subject: "Withdrawal Request Received",
      text: `Dear Admin,

A new withdrawal request has been received.

User Details:
- User ID: ${userId}
- User Email: ${userEmail}
- User Name: ${userName}

Withdrawal Details:
- Amount: ${amount}
- Account Number: ${accountNumber}
- Bank: ${bank}
- Account Name: ${accountName}
- Request Date: ${new Date().toLocaleString()}

Please review and process this request accordingly.

Best regards,
Your Application Team`,
      html: `
        <p>Dear Admin,</p>
        <p>A new withdrawal request has been received.</p>
        <p><strong>User Details:</strong></p>
        <ul>
          <li>User ID: ${userId}</li>
          <li>User Email: ${userEmail}</li>
          <li>User Name: ${userName}</li>
        </ul>
        <p><strong>Withdrawal Details:</strong></p>
        <ul>
          <li>Amount: $ ${amount}</li>
          <li>Account Number: ${accountNumber}</li>
          <li>Bank: ${bank}</li>
          <li>Account Name: ${accountName}</li>
          <li>Request Date: ${new Date().toLocaleString()}</li>
        </ul>
        <p>Please review and process this request accordingly.</p>
        <p>Best regards,<br>Your Application Team</p>
      `,
    });

    console.log("Withdrawal request email sent");

    // Proceed with saving the withdrawal details to MongoDB
    let userWithdrawal = await UserWithdrawal.findOne({ userId });

    if (!userWithdrawal) {
      // Create a new withdrawal record if none exists
      userWithdrawal = new UserWithdrawal({
        userId,
        userEmail,
        userName,
        withdrawals: [],
      });
    }

    // Add the new withdrawal request with the request date
    userWithdrawal.withdrawals.push({
      amount,
      accountNumber,
      bank,
      accountName,
      requestedAt: new Date(), // Set the current date and time
      status: "pending", // Default status
    });

    // Save the updated withdrawal record
    await userWithdrawal.save();

    // Find user dashboard details and update the balance and referred chain count
    let userDashboardDetails = await UserDashboardDetails.findOne({ userId });

    if (!userDashboardDetails) {
      return res
        .status(404)
        .json({ message: "User dashboard details not found" });
    }

    // Update the user's balance and referred chain count
    userDashboardDetails.balance -= amount;
    userDashboardDetails.referredChainCount -= amount / 2;

    // Save the updated dashboard details
    await userDashboardDetails.save();

    res.status(200).json({
      success: true,
      message: "Withdrawal request submitted and email sent successfully",
    });
  } catch (error) {
    console.error("Error processing withdrawal request:", error);

    // Handle error sending email
    if (error.message.includes("Error sending email")) {
      return res.status(500).json({
        success: false,
        message: "Failed to send withdrawal request email",
      });
    }

    // Handle other errors (e.g., MongoDB issues)
    res.status(500).json({
      success: false,
      message: "Failed to process withdrawal request",
    });
  }
};

module.exports = {
  requestWithdrawal,
};
