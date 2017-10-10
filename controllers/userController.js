const { User } = require('../models');
const bcrypt = require('bcrypt');

module.exports = {
    getCurrentUser: function(req, res) {
        res.json(req.user);
    },
    addUser: function(userObj) {
        return bcrypt.hash(userObj.password, 10).then(hash => {
            // Store hash in your password DB.
            userObj.pw_hash = hash;
            const user = new User(userObj);

            return user.save().then(savedUser => {
                return savedUser;
            });
        });
    }
};
