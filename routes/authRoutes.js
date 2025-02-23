import express from "express";
import authController from "../controllers/authController.js";

const router = express.Router();

// Route d'inscription
router.post("/register", authController.register);

// Route de connexion
router.post("/login", authController.login);

export default router;