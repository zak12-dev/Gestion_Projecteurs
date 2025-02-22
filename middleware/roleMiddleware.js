xxx
function roleMiddleware (role) {
    return (req, res, next) => {
        if (req.user.role !== role) {
            return res.sendStatus(403); // L'utilisateur n'a pas le bon rôle, retourne erreur 403
        }
        next();
    };
}

module.exports = roleMiddleware;