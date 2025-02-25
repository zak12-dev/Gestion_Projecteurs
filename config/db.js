import sqlite3 from "sqlite3";
import path from "path";
import { fileURLToPath } from "url";

// Convertir l'URL du module en chemin de fichier
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemin de la base de données
const dbPath = path.resolve(__dirname, "../database/projectors.db");

// Connexion à la base de données SQLite
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error(
      "Erreur lors de l'ouverture de la base de données :",
      err.message
    );
  } else {
    console.log("Connexion à la base de données SQLite réussie");
  }
});

export default db;