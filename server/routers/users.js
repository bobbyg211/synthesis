const express = require("express");
const usersController = require("../controllers/users");
const router = express.Router();

router.get("/", usersController.getAllUsers);

router.get("/:id", usersController.getUserById);

router.get("/address/:id", usersController.getUserAddressById);

router.post("/", usersController.createUser);

router.put("/:id", usersController.updateUserById);

router.delete("/:id", usersController.deleteUserById);

module.exports = router;
