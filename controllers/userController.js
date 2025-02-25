import userModel from "../models/userModel.js"; // Pour interagir avec la table des utilisateurs

// Route protégée pour obtenir le profil de l'utilisateur
const getProfile = async (req, res) => {
  try {
    // Récupérer l'utilisateur attaché à la requête par le middleware
    const user = req.user;

    // Retourner les informations de l'utilisateur (sans le mot de passe)
    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } catch (err) {
    // En cas d'erreur, retourner un message d'erreur
    res.status(400).json({ error: err.message });
  }
};

export default { getProfile };

