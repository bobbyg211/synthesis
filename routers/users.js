const express = require("express");
const usersController = require("../controllers/users");
const router = express.Router();
const { checkJwt } = require("../auth/check-jwt");

router.get("/", checkJwt, usersController.getAllUsers);

router.get("/:id", usersController.getUserById);

router.post("/", usersController.createUser);

router.put("/:id", usersController.updateUserById);

// router.delete("/:id", usersController.deleteUserById);

module.exports = router;
