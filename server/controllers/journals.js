const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");

const getJournals = (req, res) => {
  pool.query("SELECT * FROM journals", (err, rows) => {
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

module.exports = {
  getJournals,
  createJournal,
};
