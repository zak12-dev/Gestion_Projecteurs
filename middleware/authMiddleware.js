import jwt from "jsonwebtoken"; // Pour vérifier et décoder les tokens JWT
import userModel from "../models/userModel.js"; // Pour interagir avec la table des utilisateurs

// Middleware pour vérifier l'authentification
const authenticate = async (req, res, next) => {
  try {
    // Récupérer le token depuis l'en-tête Authorization
    const token = req.header("Authorization")?.replace("Bearer ", "");

    // Si le token n'existe pas, retourner une erreur
    if (!token) {
      return res.status(401).json({ error: "Accès non autorisé. Token manquant." });
    }

    // Vérifier et décoder le token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Trouver l'utilisateur correspondant au token
    const user = await userModel.findUserById(decoded.id);
    if (!user) {
      return res.status(401).json({ error: "Utilisateur non trouvé." });
    }

    // Attacher l'utilisateur à la requête pour une utilisation ultérieure
    req.user = user;

    // Passer au middleware ou à la route suivante
    next();
  } catch (err) {
    // En cas d'erreur (token invalide ou expiré), retourner une erreur
    res.status(401).json({ error: "Token invalide ou expiré." });
  }
};

export default authenticate;