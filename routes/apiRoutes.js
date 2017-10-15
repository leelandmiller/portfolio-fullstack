const express = require('express');
const router  = new express.Router();

const { projectController } = require('../controllers');

router.get('/allprojects', (req, res) => {
    res.json({
        root: 'this will show all projects'
    });
});

router.post('/newproject', (req, res) => {
    // will come in on req.body

    projectController.addProject(req.body, req.file, (newProject) => {
        res.json(newProject);
    });
});

router.put('/editproject/:projectId', (req, res) => {
    //TODO: edit project - id on req.params, edits on req.body
})

router.delete('/deleteproject/:projectId', (req, res) => {
    //TODO: delete project based on req.params.projectId
});

module.exports = router;
