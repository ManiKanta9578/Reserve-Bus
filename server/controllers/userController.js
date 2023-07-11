// @desc   Auth user
// route   POST /api/users/auth
// @access Public
const authUser = async (req, res) => {
  res.status(200).json({ message: "Auth User" });
};

// @desc   Register new user
// route   POST /api/users
// @access Public
const registerUser = async (req, res) => {
    const {name} = req.body;
    console.log(name);
  res.status(200).json({ message: "Register User" });
};

// @desc   POST Logout user
// route   POST /api/users/logout
// @access Public
const logoutUser = async (req, res) => {
  res.status(200).json({ message: "Logout User" });
};

// @desc   Get user profile
// route   GET /api/users/profile
// @access Private
const getUserProfile = async (req, res) => {
  res.status(200).json({ message: "User Profile" });
};

// @desc   Update user Profile
// route   PUT /api/users/profile
// @access Private
const updateUserProfile = async (req, res) => {
  res.status(200).json({ message: "Update User profile" });
};

module.exports = {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
