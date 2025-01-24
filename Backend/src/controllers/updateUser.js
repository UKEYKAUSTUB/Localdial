const User = require("../models/User");

const updateUser = async (req, res) => {
  try {
    const { id } = req.params; // Get the ObjectId from the request parameters
    const { name, email, password } = req.body; // Data to update

    // Validate ObjectId
    if (!id) {
      return res.status(400).json({ message: "User ID is required." });
    }

    // Ensure at least one field is provided for update
    if (!name && !email && !password) {
      return res.status(400).json({ message: "At least one field (name, email, or password) is required for update." });
    }

    // Find the user by ID and update
    const updatedUser = await User.findByIdAndUpdate(
      id, // ID to find the user
      { $set: { name, email, password } }, // Update fields (only non-null values)
      { new: true, runValidators: true } // Return updated document and apply schema validations
    );

    // Check if user exists
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

module.exports = updateUser;
