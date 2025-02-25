import express from "express";
import reservationController from "../controllers/reservationController.js";

const router = express.Router();

// Route pour créer une réservation (POST /reservations)
router.post("/", reservationController.createReservation);

// Route pour lister toutes les réservations (GET /reservations)
router.get("/", reservationController.getAllReservations);

// Route pour annuler une réservation (DELETE /reservations/:id)
router.delete("/:id", reservationController.deleteReservation);

export default router;