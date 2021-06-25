const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");

// const getAllUsers = (req, res) => {
//   pool.query("SELECT * FROM users", (err, rows) => {
//     if (err) return handleSQLError(res, err);
//     return res.json(rows);
//   });
// };

// const getUserById = (req, res) => {
//   let sql = "SELECT * FROM users WHERE id = ?";
//   sql = mysql.format(sql, [req.params.id]);

//   pool.query(sql, (err, rows) => {
//     if (err) return handleSQLError(res, err);
//     return res.json(rows);
//   });
// };

const createUser = (req, res) => {
  const { id, first_name, last_name } = req.body;
  let sql = "INSERT INTO users (id, first_name, last_name) VALUES (?, ?, ?)";
  sql = mysql.format(sql, [id, first_name, last_name]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ newId: results.insertId });
  });
};

// const updateUserById = (req, res) => {
//   const { firstName, lastName, email } = req.body;
//   let sql =
//     "UPDATE users SET first_name = ?, last_name = ?, email = ? WHERE id = ?";
//   sql = mysql.format(sql, [firstName, lastName, email, req.params.id]);

//   pool.query(sql, (err, results) => {
//     if (err) return handleSQLError(res, err);
//     return res.status(204).json();
//   });
// };

// const deleteUserById = (req, res) => {
//   let sql =
//     "DELETE users, usersAddress FROM users INNER JOIN usersAddress on users.id = usersAddress.user_id WHERE users.id = ?";
//   sql = mysql.format(sql, [req.params.first_name]);

//   pool.query(sql, (err, results) => {
//     if (err) return handleSQLError(res, err);
//     return res.json({ message: `Deleted ${results.affectedRows} user(s)` });
//   });
// };

module.exports = {
  createUser,
};
