var express = require('express');
var router = express.Router();

// Middleware de autenticación
function authMiddleware(req, res, next){
    if(req.session.user) return next();
    res.redirect('/');
}

/* GET chat page */
router.get('/', authMiddleware, (req, res) => {
    res.render('chat', { user: req.session.user });
});

module.exports = router;
