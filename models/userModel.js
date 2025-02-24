import db from "../config/db.js";

// Créer un nouvel utilisateur
const createUser = (name, email, password, role) => {
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)`;
    db.run(sql, [name, email, password, role], function (err) {
      if (err) reject(err);
      else resolve(this.lastID);
    });
  });
};

// Trouver un utilisateur par email
const findUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM users WHERE email = ?`;
    db.get(sql, [email], (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
};

export default {
  createUser,
  findUserByEmail,
};