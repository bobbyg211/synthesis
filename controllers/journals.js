const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");

const getJournals = (req, res) => {
  pool.query("SELECT * FROM journals", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getJournalById = (req, res) => {
  let sql = "SELECT * FROM journals WHERE id = ?";
  sql = mysql.format(sql, [req.params.id]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getEntriesById = (req, res) => {
  let sql = "SELECT * FROM entries WHERE journal_id = ?";
  sql = mysql.format(sql, [req.params.id]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getEntryById = (req, res) => {
  let sql = "SELECT * FROM entries WHERE id = ? AND journal_id = ?";
  sql = mysql.format(sql, [req.params.eid, req.params.jid]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getNotesByEntryId = (req, res) => {
  let sql = "SELECT * FROM notes WHERE entry_id = ?";
  sql = mysql.format(sql, [req.params.eid]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const createJournal = (req, res) => {
  const { title, user_id } = req.body;
  let sql = "INSERT INTO journals (title, user_id) VALUES (?, ?)";
  sql = mysql.format(sql, [title, user_id]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ newId: results.insertId });
  });
};

const createEntry = (req, res) => {
  const { journal_id } = req.body;
  let sql = "INSERT INTO entries (journal_id) VALUES (?)";
  sql = mysql.format(sql, [journal_id]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ newId: results.insertId });
  });
};

const createNote = (req, res) => {
  const { title, description, entry_id } = req.body;
  let sql = "INSERT INTO notes (title, description, entry_id) VALUES (?, ?, ?)";
  sql = mysql.format(sql, [title, description, entry_id]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ newId: results.insertId });
  });
};

const deleteJournal = (req, res) => {
  let sql = "DELETE FROM journals WHERE id = ?";
  sql = mysql.format(sql, [req.body.id]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ message: `Deleted ${results.affectedRows} journal` });
  });
};

module.exports = {
  getJournals,
  getJournalById,
  getEntriesById,
  getEntryById,
  getNotesByEntryId,
  createJournal,
  createEntry,
  createNote,
  deleteJournal,
};
