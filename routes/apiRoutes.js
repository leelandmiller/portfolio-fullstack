const express = require('express');
const router = new express.Router();
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const s3Options = require('../config/images').s3Options;

const { projectController } = require('../controllers');


router.get('/allprojects', (req, res) => {
    projectController.getAllProjects().then(projects => {
        res.json(projects);
    });
});

router.post('/newproject', upload.single('image'), (req, res) => {

    const project = {
        image: req.file,
        title: req.body.title,
        description: req.body.description,
        github_url: req.body.github,
        demo_url: req.body.demo,
        color: req.body.color,
        user: req.user._id,
    }

    projectController.addProject(project, (newProject) => {
        res.json(newProject);
    });
});

router.put('/editproject/:projectId', (req, res) => {
    //TODO: edit project - id on req.params, edits on req.body
});

router.delete('/deleteproject/:projectId', (req, res) => {
    //TODO: delete project based on req.params.projectId
});

module.exports = router;
