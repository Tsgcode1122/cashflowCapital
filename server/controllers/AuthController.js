// controllers/AuthController.js

const User = require("../models/User");
const UserDashboardDetails = require("../models/UserDashboardDetails");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
// Register a new user
exports.register = async (req, res) => {
  try {
    const { fullName, email, password, phoneNumber, referralId } = req.body;
    console.log(referralId);

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      fullName,
      email,
      phoneNumber,
      password: hashedPassword,
    });

    // Save the user to get the _id
    await newUser.save();

    // Generate referral link
    newUser.referralLink = `http://localhost:5173/register/${newUser._id}`;

    // Save the updated user with the referral link
    await newUser.save();

    // Create UserDashboardDetails for the new user
    const newUserDashboard = new UserDashboardDetails({
      userId: newUser._id,
      userEmail: newUser.email,
      userName: newUser.fullName,
      referralLink: newUser.referralLink,
    });

    // Save the UserDashboardDetails
    await newUserDashboard.save();

    // Update the referrer's details if referralId is present
    if (referralId) {
      const referrer = await UserDashboardDetails.findOne({
        userId: referralId,
      });
      if (referrer) {
        console.log("Referral ID found. Updating referrer details.");

        referrer.referredTotalCount = (referrer.referredTotalCount || 0) + 1;
        referrer.referredChainCount = (referrer.referredChainCount || 0) + 1;
        referrer.balance = referrer.referredChainCount * 2;

        await referrer.save();
      } else {
        console.log("Referrer not found.");
      }
    }

    res.status(201).json({
      message: "User registered successfully",
      referralLink: newUser.referralLink,
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Controller function to check if email exists
exports.checkEmailExists = async (req, res) => {
  const { email } = req.body;

  try {
    // Check if the email exists in the database
    const user = await User.findOne({ email });
    const exists = !!user;

    res.status(200).json({ exists });
  } catch (error) {
    console.error("Error checking email existence:", error);
    res.status(500).json({ error: "Failed to check email existence" });
  }
};

// User login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Return user data along with the token
    res.status(200).json({ token, user });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "reset sent to email" });
  } catch (error) {
    console.error("Error updating password:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
exports.newPasswords = async (req, res) => {
  const { email, newPassword } = req.body;
  console.log("email gotten:", email);
  console.log("newpassword inputed:", newPassword);

  // console.log(email);
  // console.log(newPassword);3
  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    //
    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password
    user.password = hashedPassword;
    await user.save();
    console.log("password successfully changed");
    // Send a response
    res.status(200).json({ message: "password change successffully" });
  } catch (error) {
    console.error("Error updating password:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
// controllers/AuthController.js

// Update user information
exports.updateUser = async (req, res) => {
  try {
    const { userId } = req.params; // Assuming userId is passed as a parameter in the request
    const {
      fullName,
      country,
      state,
      streetAddress,
      city,
      phoneNumber,
      accountNumber,
      bank,
      accountName,
    } = req.body;

    // Find the user by userId
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user's information
    if (fullName) user.fullName = fullName;
    if (country) user.country = country;
    if (state) user.state = state;
    if (streetAddress) user.streetAddress = streetAddress;
    if (city) user.city = city;
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (accountNumber) user.accountNumber = accountNumber;
    if (bank) user.bank = bank;
    if (accountName) user.accountName = accountName;

    // Save the updated user to the database
    await user.save();

    res
      .status(200)
      .json({ message: "User information updated successfully", user });
  } catch (error) {
    console.error("Error updating user information:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
// controllers/AdminController.js

exports.checkAdminStatus = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if user is an admin
    if (user.isAdmin) {
      return res.status(200).json({ isAdmin: true });
    } else {
      return res.status(200).json({ isAdmin: false });
    }
  } catch (error) {
    console.error("Error checking admin status:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
// Get all user data
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});

    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching all users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
// Delete user by ID
exports.deleteUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    // Find the user by ID and delete it
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
