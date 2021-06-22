const express = require("express");
const journalsController = require("../controllers/journals");
const router = express.Router();
const { checkJwt } = require("../auth/check-jwt");

router.get("/", checkJwt, journalsController.getJournals);

router.get("/:id/entries", checkJwt, journalsController.getEntriesById);

router.get("/:id", checkJwt, journalsController.getJournalById);

router.post("/", checkJwt, journalsController.createJournal);

router.post("/:id/entry", checkJwt, journalsController.createEntry);

module.exports = router;
