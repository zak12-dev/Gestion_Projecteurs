import express from "express";
import projectorController from "../controllers/projectorController.js";

const router = express.Router();

// Route pour ajouter un projecteur (POST /projectors)
router.post("/", projectorController.addProjector);

// Route pour lister tous les projecteurs (GET /projectors)
router.get("/", projectorController.getAllProjectors);

// Route pour modifier un projecteur (PUT /projectors/:id)
router.put("/:id", projectorController.updateProjector);

// Route pour supprimer un projecteur (DELETE /projectors/:id)
router.delete("/:id", projectorController.deleteProjector);

export default router;