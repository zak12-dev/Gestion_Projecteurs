import express from "express";
import authenticate from "../middleware/authMiddleware.js"; // Middleware d'authentification
import isAdmin from "../middleware/roleMiddleware.js"; // Middleware pour vérifier les rôles
import projectorController from "../controllers/projectorController.js";

const router = express.Router();

// Route pour ajouter un projecteur (POST /projectors)
router.post("/", authenticate, isAdmin, projectorController.addProjector);

// Route pour lister tous les projecteurs (GET /projectors)
router.get("/", projectorController.getAllProjectors);

// Route pour modifier un projecteur (PUT /projectors/:id)
router.put("/:id", authenticate, isAdmin, projectorController.updateProjector);

// Route pour supprimer un projecteur (DELETE /projectors/:id)
router.delete("/:id", authenticate, isAdmin, projectorController.deleteProjector);

export default router;