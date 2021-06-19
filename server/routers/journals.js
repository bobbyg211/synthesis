const express = require("express");
const journalsController = require("../controllers/journals");
const router = express.Router();
const { checkJwt } = require("../auth/check-jwt");

router.get("/", checkJwt, journalsController.getJournals);

router.post("/", checkJwt, journalsController.createJournal);

module.exports = router;
