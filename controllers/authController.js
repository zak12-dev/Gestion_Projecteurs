import bcrypt from "bcrypt"; // Pour hacher les mots de passe
import jwt from "jsonwebtoken"; // Pour générer des tokens JWT
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

// Connexion d'un utilisateur
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Trouver l'utilisateur par email
    const user = await userModel.findUserByEmail(email);
    if (!user) {
      return res.status(400).json({ error: "Utilisateur non trouvé" });
    }

    // Comparer le mot de passe fourni avec le mot de passe haché en base de données
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ error: "Mot de passe incorrect" });
    }

    // Générer un token JWT contenant l'ID et le rôle de l'utilisateur
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h", // Le token expire après 1 heure
      }
    );

    // Retourner le token généré
    res.json({ token });
  } catch (err) {
    // En cas d'erreur, retourner un message d'erreur
    res.status(400).json({ error: err.message });
  }
};

export default { register, login };