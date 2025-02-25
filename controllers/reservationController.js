import reservationModel from "../models/reservationModel.js"; // Modèle pour interagir avec la table des réservations
import projectorModel from "../models/projectorModel.js";    //Pour interagir avec les tables de projecteurs
// Réserver un projecteur
const createReservation = async (req, res) => {
  const { user_id, projector_id, start_time, end_time } = req.body;

  try {
    // Vérifier si le projecteur est disponible
    const projector = await projectorModel.findProjectorById(projector_id);
    if (!projector || !projector.available) {
      return res.status(400).json({ error: "Projecteur non disponible." });
    }

    // Créer la réservation
    const reservationId = await reservationModel.createReservation(
      user_id,
      projector_id,
      start_time,
      end_time
    );

    // Retourner une réponse de succès
    res.status(201).json({ message: "Réservation créée avec succès", reservationId });
  } catch (err) {
    // En cas d'erreur, retourner un message d'erreur
    res.status(400).json({ error: err.message });
  }
};
// Lister toutes les réservations
const getAllReservations = async (req, res) => {
  try {
    // Récupérer toutes les réservations
    const reservations = await reservationModel.getAllReservations();

    // Retourner la liste des réservations
    res.json(reservations);
  } catch (err) {
    // En cas d'erreur, retourner un message d'erreur
    res.status(400).json({ error: err.message });
  }
};

// Annuler une réservation
const deleteReservation = async (req, res) => {
  const { id } = req.params; // ID de la réservation à annuler

  try {
    // Supprimer la réservation en base de données
    await reservationModel.deleteReservation(id);

    // Retourner une réponse de succès
    res.json({ message: "Réservation annulée avec succès" });
  } catch (err) {
    // En cas d'erreur, retourner un message d'erreur
    res.status(400).json({ error: err.message });
  }
};

export default { createReservation, getAllReservations, deleteReservation };