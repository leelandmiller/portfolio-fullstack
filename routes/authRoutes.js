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

module.exports = router;
