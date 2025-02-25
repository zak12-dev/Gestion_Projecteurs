import db from "../config/db.js"; // Connexion à la base de données

// Créer une réservation
const createReservation = (user_id, projector_id, start_time, end_time) => {
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO reservations (user_id, projector_id, start_time, end_time) VALUES (?, ?, ?, ?)`;
    db.run(sql, [user_id, projector_id, start_time, end_time], function (err) {
      if (err) reject(err);
      else resolve(this.lastID); // Retourne l'ID de la réservation créée
    });
  });
};

// Lister toutes les réservations
const getAllReservations = () => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM reservations`;
    db.all(sql, (err, rows) => {
      if (err) reject(err);
      else resolve(rows); // Retourne la liste des réservations
    });
  });
};

// Supprimer une réservation
const deleteReservation = (id) => {
  return new Promise((resolve, reject) => {
    const sql = `DELETE FROM reservations WHERE id = ?`;
    db.run(sql, [id], function (err) {
      if (err) reject(err);
      else resolve(this.changes > 0); // Retourne true si une réservation a été supprimée
    });
  });
};

export default { createReservation, getAllReservations, deleteReservation };