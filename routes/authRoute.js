const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { secretKey } = require('../config');

// Exemple de route pour se connecter et générer un token JWT
router.post('/login', (req, res) => {
    // Exemple de vérification d'utilisateur 
    const { username, password } = req.body;
    if (username === 'admin' && password === 'admin123') {
        const user = { id: 1, username: 'admin', role: 'admin' };
        const token = jwt.sign(user, secretKey, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Identifiants incorrects' });
    }
});

module.exports = router;