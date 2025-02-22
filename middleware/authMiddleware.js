
const jwt = require('jsonwebtoken');
const { secretKey } = require('../config'); // Assurez-vous d'avoir une clé secrète dans votre configuration

function authMiddleware(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401); // Pas de token, retourne erreur 401

    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.sendStatus(403); // Token invalide, retourne erreur 403
        req.user = user;
        next();
    });
}

module.exports = authMiddleware;