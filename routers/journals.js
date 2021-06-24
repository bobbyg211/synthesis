const express = require("express");
const journalsController = require("../controllers/journals");
const router = express.Router();
const { checkJwt } = require("../auth/check-jwt");

router.get("/", checkJwt, journalsController.getJournals);

router.get(
  "/:jid/entry/:eid/notes",
  checkJwt,
  journalsController.getNotesByEntryId
);

router.get("/:jid/entry/:eid", checkJwt, journalsController.getEntryById);

router.get("/:id/entries", checkJwt, journalsController.getEntriesById);

router.get("/:id", checkJwt, journalsController.getJournalById);

router.post("/:jid/entry/:eid", checkJwt, journalsController.createNote);

router.post("/:id/entry", checkJwt, journalsController.createEntry);

router.post("/", checkJwt, journalsController.createJournal);

module.exports = router;
