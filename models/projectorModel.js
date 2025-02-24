import db from "../config/db.js";

// Ajouter un projecteur
const addProjector = (name, status, available) => {
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO projectors (name, status, available) VALUES (?, ?, ?)`;
    db.run(sql, [name, status, available], function (err) {
      if (err) reject(err);
      else resolve(this.lastID);
    });
  });
};

// Lister tous les projecteurs
const getAllProjectors = () => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM projectors`;
    db.all(sql, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
};

// Mettre à jour un projecteur
const updateProjector = (id, name, status, available) => {
  return new Promise((resolve, reject) => {
    const sql = `UPDATE projectors SET name = ?, status = ?, available = ? WHERE id = ?`;
    db.run(sql, [name, status, available, id], function (err) {
      if (err) reject(err);
      else resolve(this.changes > 0); // Retourne true si le projecteur a été mis à jour
    });
  });
};

// Supprimer un projecteur
const deleteProjector = (id) => {
  return new Promise((resolve, reject) => {
    const sql = `DELETE FROM projectors WHERE id = ?`;
    db.run(sql, [id], function (err) {
      if (err) reject(err);
      else resolve(this.changes > 0); // Retourne true si le projecteur a été supprimé
    });
  });
};

export default {
  addProjector,
  getAllProjectors,
  updateProjector,
  deleteProjector,
};