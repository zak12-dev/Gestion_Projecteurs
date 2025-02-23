import bcrypt from "bcrypt"; // Pour hacher les mots de passe
import userModel from "../models/userModel.js"; // Modèle pour interagir avec la table des utilisateurs

// Inscription d'un utilisateur
const register = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    // Hacher le mot de passe avec bcrypt (10 tours de hachage)
    const hashedPassword = await bcrypt.hash(password, 10);

    // Créer l'utilisateur en base de données
    const userId = await userModel.createUser(
      name,
      email,
      hashedPassword,
      role
    );

    // Retourner une réponse de succès avec l'ID de l'utilisateur créé
    res
      .status(201)
      .json({ message: "Utilisateur enregistré avec succès", userId });
  } catch (err) {
    // En cas d'erreur, retourner un message d'erreur
    res.status(400).json({ error: err.message });
  }
};

export default { register };