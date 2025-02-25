// Middleware pour vérifier si l'utilisateur est un administrateur
const isAdmin = (req, res, next) => {
    // Récupérer l'utilisateur attaché à la requête par le middleware d'authentification
    const user = req.user;
  
    // Vérifier si l'utilisateur a le rôle "admin"
    if (user.role !== "admin") {
      return res.status(403).json({ error: "Accès refusé. Réservé aux administrateurs." });
    }
  
    // Passer au middleware ou à la route suivante
    next();
  };
  
  export default isAdmin;