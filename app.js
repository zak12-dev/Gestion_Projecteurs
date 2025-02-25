import express from "express"; // Framework pour créer le serveur
import dotenv from "dotenv"; // Pour charger les variables d'environnement
import db from "./config/db.js"; // Connexion à la base de données
import authRoutes from "./routes/authRoutes.js"; // Routes d'authentification
import projectorRoutes from "./routes/projectorRoutes.js"; // Routes pour la gestion des projecteurs
import reservationRoutes from "./routes/reservationRoutes.js"; // Routes pour la gestion des réservations

// Charge les variables d'environnement depuis le fichier .env
dotenv.config();

// Initialiser l'application Express
const app = express();
const PORT = process.env.PORT || 3000; // Utilise le port 3000 par défaut

// Middleware pour parser le JSON dans les requêtes
app.use(express.json());

// Routes de l'application
app.use("/auth", authRoutes); // Routes d'authentification
app.use("/projectors", projectorRoutes); // Routes pour la gestion des projecteurs
app.use("/reservations", reservationRoutes); // Routes pour la gestion des réservations
db.
// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur a bien démarré sur http://localhost:${PORT}`);
});