const passport = require('passport');
const express = require('express');
const router = express.Router();

const { userController } = require('../controllers');

router.get('/currentuser', userController.getCurrentUser);

router.post('/login', passport.authenticate('local', {
    failureRedirect: '/login'
}), (req, res) => {
    res.redirect('/');
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

router.post('/signup', (req, res) => {
    userController.addUser(req.body.newUser).then(newUser => {
        res.json(newUser);
    });
});

module.exports = router;
