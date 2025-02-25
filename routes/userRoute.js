import express from "express";
import authenticate from "../middleware/authMiddleware.js"; // Middleware d'authentification
import userController from "../controllers/userController.js"; // Contrôleur pour les utilisateurs

const router = express.Router();

// Route protégée pour obtenir le profil de l'utilisateur (GET /profile)
router.get("/profile", authenticate, userController.getProfile);

export default router;