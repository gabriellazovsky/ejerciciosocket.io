var express = require('express');
var router = express.Router();

/* GET login page */
router.get('/', function(req, res) {
    res.render('login');
});

/* POST login */
router.post('/', function(req, res) {
    const username = req.body.username;
    if(!username) return res.redirect('/');

    req.session.user = username;

    // Guardar sesión antes de redirigir
    req.session.save(err => {
        if(err) {
            console.error(err);
            return res.redirect('/');
        }
        res.redirect('/chat');
    });
});

module.exports = router;
