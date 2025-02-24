import projectorModel from "../models/projectorModel.js"; // Modèle pour interagir avec la table des projecteurs

// Ajouter un projecteur
const addProjector = async (req, res) => {
  const { name, status, available } = req.body;

  try {
    // Ajouter le projecteur en base de données
    const projectorId = await projectorModel.addProjector(
      name,
      status,
      available
    );

    // Retourner une réponse de succès avec l'ID du projecteur créé
    res
      .status(201)
      .json({ message: "Projecteur ajouté avec succès", projectorId });
  } catch (err) {
    // En cas d'erreur, retourner un message d'erreur
    res.status(400).json({ error: err.message });
  }
};

// Lister tous les projecteurs disponibles
const getAllProjectors = async (req, res) => {
  try {
    // Récupérer tous les projecteurs disponibles
    const projectors = await projectorModel.getAllProjectors();

    // Retourner la liste des projecteurs
    res.json(projectors);
  } catch (err) {
    // En cas d'erreur, retourner un message d'erreur
    res.status(400).json({ error: err.message });
  }
};

// Modifier l'état d'un projecteur
const updateProjector = async (req, res) => {
  const { id } = req.params; // ID du projecteur à modifier
  const { name, status, available } = req.body; // Nouvel état du projecteur

  try {
    // Mettre à jour le projecteur en base de données
    await projectorModel.updateProjector(id, name, status, available);

    // Retourner une réponse de succès
    res.json({ message: "Projecteur mis à jour avec succès" });
  } catch (err) {
    // En cas d'erreur, retourner un message d'erreur
    res.status(400).json({ error: err.message });
  }
};

// Supprimer un projecteur
const deleteProjector = async (req, res) => {
  const { id } = req.params; // ID du projecteur à supprimer

  try {
    // Supprimer le projecteur en base de données
    await projectorModel.deleteProjector(id);

    // Retourner une réponse de succès
    res.json({ message: "Projecteur supprimé avec succès" });
  } catch (err) {
    // En cas d'erreur, retourner un message d'erreur
    res.status(400).json({ error: err.message });
  }
};

export default {
  addProjector,
  getAllProjectors,
  updateProjector,
  deleteProjector,
};