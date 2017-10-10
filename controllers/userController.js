const { User } = require('../models');
const bcrypt = require('bcrypt');

module.exports = {
    getCurrentUser: function(req, res) {
        res.json(req.user);
    }
};
