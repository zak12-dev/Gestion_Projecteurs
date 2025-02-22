const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// Chemin vers le fichier de base de donn�es
const dbPath = path.resolve(__dirname, "database", "gestion_projecteurs.db");

// Connexion � SQLite
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error(" Erreur de connexion � SQLite :", err.message);
    } else {
        console.log("Connexion � SQLite r�ussie !");
    }
});
module.exports = {
    secretKey: 'votre_clé_secrète_jwt', // Remplacez par une clé secrète robuste
};
module.exports = db;
