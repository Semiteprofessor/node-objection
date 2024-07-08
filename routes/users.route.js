const express = require("express");
const {
  createUser,
  getAllUsers,
  editUser,
  deleteUser,
  getUserById,
} = require("../controllers/user");
const router = express.Router();

router.post("/create-user", createUser);
router.get("/", getAllUsers);
router.get("/:id", getUserById); // Get user by ID
router.put("/:edit-user", editUser);
router.delete("/delete-user", deleteUser);

module.exports = router;
