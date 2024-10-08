const nodemailer = require("nodemailer");
const express = require("express");
const jwt = require("jsonwebtoken"); // Import JWT module
require("dotenv").config();

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Generate random verification code
const generateVerificationCode = () => {
  // Generate a random alphanumeric code
  const code = Math.random().toString(36).substr(2, 6).toUpperCase();
  return code;
};

exports.sendVerificationCode = async (req, res) => {
  const { email } = req.body;
  try {
    // Generate a new verification code
    const verify = generateVerificationCode();

    // Create a JWT containing the verification code
    const token = jwt.sign({ verify }, process.env.JWT_SECRET);

    // Log the generated token
    console.log("Generated JWT token:", token);

    // Send the verification code token to the user's email
    await transporter.sendMail({
      from: process.env.MAIL_SENDER,
      to: email,
      subject: "Email Verification Code",
      text: `Your verification code is: ${verify}`,
      html: `Your verification code is: <strong>${verify}</strong>`,
    });

    console.log("Verification code sent to:", email);
    console.log("Generated verification code:", verify);

    res.status(200).json({
      success: true,
      message: "Verification code sent successfully",
      token: token, // Include the token in the response
    });
  } catch (error) {
    console.error("Error sending verification code:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send verification code",
    });
  }
};

exports.verifyCode = async (req, res) => {
  const { verificationCode, token } = req.body;

  try {
    // Decode the JWT to extract the verification code
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const verification = decoded.verify;

    console.log("Code sent from frontend:", verificationCode);
    console.log("Decoded verification code:", verification);

    // Compare the provided code with the verification code
    const success = verificationCode === verification;

    if (success) {
      console.log("Verification successful");
      res.json({ success: true });
    } else {
      console.log("Verification failed");
      res.json({ success: false });
    }
  } catch (error) {
    console.error("Error verifying code:", error);
    res.status(500).json({ success: false, message: "Failed to verify code" });
  }
};

exports.Subscribe = async (req, res) => {
  const { email, notify } = req.body;
  const adminEmail = "cashflowcapital.info@gmail.com";

  try {
    if (!email || !notify) {
      return res.status(400).json({
        success: false,
        message: "Email and notification preference are required",
      });
    }

    // Send the subscription details to the admin email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: adminEmail,
      subject: "New Subscription Request",
      text: `Dear Admin, you have a new subscriber: ${email},and also wants to receive notifications on news and update: ${notify}`,
      html: `
        <p>Dear Admin,</p>
        <p>You have a new subscriber: <strong>${email}</strong></p>
        <p>They wish to receive notifications on news and update: <strong>${notify}</strong></p>
      `,
    });

    // Respond with success status
    res.status(200).json({
      success: true,
      message: "Subscription request received",
    });
  } catch (error) {
    console.error("Error processing subscription request:", error);

    // Respond with error status
    res.status(500).json({
      success: false,
      message: "Failed to process subscription request",
    });
  }
};
