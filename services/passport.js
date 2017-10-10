const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../models');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, (username, password, done) => {
    User.findOne({ email: username }).then(user => {
        if (!user) {
            return done(null, false, { message: 'incorrect username' });
        }

        bcrypt.compare(password, user.pw_hash).then(passRes => {
            if (passRes) {
                return done(null, user);
            } else if (!passRes) {
                return done(null, false);
            }
        });
    }).catch(err => {
        return done(err);
    });
}));
