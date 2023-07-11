const router = require("express").Router();

const {
  authUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  registerUser,
} = require("../controllers/userController");

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);

module.exports = router;
