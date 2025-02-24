import db from "../../config/db.js";

// Fonction pour créer les tables
const createTables = () => {
  db.serialize(() => {
    // Table Utilisateurs
    db.run(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      role TEXT CHECK(role IN ('etudiant', 'enseignant', 'admin')) DEFAULT 'etudiant'
    )`);

    // Table Projecteurs
    db.run(`CREATE TABLE IF NOT EXISTS projectors (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      status TEXT CHECK(status IN ('fonctionnel', 'en panne')) DEFAULT 'fonctionnel',
      available BOOLEAN DEFAULT 1
    )`);

    // Table Réservations
    db.run(`CREATE TABLE IF NOT EXISTS reservations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      projector_id INTEGER NOT NULL,
      start_time TEXT NOT NULL,
      end_time TEXT NOT NULL,
      FOREIGN KEY(user_id) REFERENCES users(id),
      FOREIGN KEY(projector_id) REFERENCES projectors(id)
    )`);

    console.log("Tables créées avec succès");
  });
};

// Exécuter la création des tables
createTables();