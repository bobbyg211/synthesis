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

module.exports = {
  getJournals,
  getJournalById,
  getEntriesById,
  createJournal,
  createEntry,
};
