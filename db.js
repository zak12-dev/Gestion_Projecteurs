const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const DB_PATH = path.resolve(process.env.DB_PATH); // Fichier SQLite
const db = new sqlite3.Database(DB_PATH, (err) => {
    if (err) {
        console.error("Erreur de connexion à SQLite:", err.message);
    } else {
        console.log("Connecté à la base de données SQLite");

        // Création des tables si elles n'existent pas
        db.run(`
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT UNIQUE NOT NULL,
                password TEXT NOT NULL,
                role TEXT NOT NULL
            )
        `);

        db.run(`
            CREATE TABLE IF NOT EXISTS projecteurs (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nom TEXT NOT NULL,
                etat TEXT NOT NULL CHECK (etat IN ('fonctionnel', 'en panne')),
                disponibilite TEXT NOT NULL CHECK (disponibilite IN ('disponible', 'occupé'))
            )
        `);

        db.run(`
            CREATE TABLE IF NOT EXISTS reservations (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER NOT NULL,
                projecteur_id INTEGER NOT NULL,
                date_reservation TEXT NOT NULL,
                FOREIGN KEY (user_id) REFERENCES users(id),
                FOREIGN KEY (projecteur_id) REFERENCES projecteurs(id)
            )
        `);
    }
});

module.exports = db;
