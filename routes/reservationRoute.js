const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

let projecteursDisponibles = 5; // Exemple de projecteurs disponibles

router.post('/reserver-projecteur', authMiddleware, (req, res) => {
    if (projecteursDisponibles > 0) {
        projecteursDisponibles--;
        res.json({ message: 'Projecteur réservé avec succès!' });
    } else {
        res.status(400).json({ message: 'Aucun projecteur disponible.' });
    }
});

module.exports = router;