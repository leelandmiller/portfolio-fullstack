const express = require('express');
const path    = require('path');
const router  = new express.Router();

let apiRoutes = require('./apiRoutes');

router.use('/api', apiRoutes);

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

module.exports = router;
