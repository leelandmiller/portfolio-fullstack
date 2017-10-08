const express = require('express');
const router  = new express.Router();

router.get('/allprojects', (req, res) => {
    res.json({
        root: 'this will show all projects'
    });
});

router.post('/newproject', (req, res) => {
    // will come in on req.body
});

router.delete('/deleteproject/:projectId', (req, res) => {
    // will delete project based on req.params.projectId
});

module.exports = router;
