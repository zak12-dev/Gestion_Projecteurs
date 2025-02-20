const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// Chemin vers le fichier de base de données
const dbPath = path.resolve(__dirname, "database", "gestion_projecteurs.db");

// Connexion à SQLite
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error(" Erreur de connexion à SQLite :", err.message);
    } else {
        console.log("Connexion à SQLite réussie !");
    }
});

module.exports = db;
