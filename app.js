const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoute'); // Si vous avez des routes d'authentification
const profileRoutes = require('./routes/profileRoute');
const adminRoutes = require('./routes/adminRoute');
const reservationRoutes = require('./routes/reservationRoute');

app.use(express.json());

// Routes
app.use('/auth', authRoutes); // Exemple de routes d'authentification
app.use('/profile', profileRoutes);
app.use('/admin', adminRoutes);
app.use('/reservation', reservationRoutes);

app.listen(3000, () => {
    console.log('Serveur en écoute sur le port 3000');
});