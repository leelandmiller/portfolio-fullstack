// const keys   = require('../config/keys').AWS_KEYS;
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const s3 = require('s3');
const upload = multer({dest: 'uploads/'});

const s3Options = require('../config/images').s3Options;
const client = s3.createClient(s3Options);
const { Project } = require('../models');

function _uploadFile(image, done) {
    let uploadParams = {
        localFile: path.resolve(__dirname, '../', image.path),

        s3Params: {
            Bucket: process.env.AWS_BUCKET,
            Key: image.originalname,
            ACL: 'public-read'
        }
    };

    let uploader = client.uploadFile(uploadParams);
    uploader.on('error', (err) => {
        console.error('unable to upload: ', err.stack);
    });

    uploader.on('progress', () => {
        console.log('progress', uploader.progressMd5Amount, uploader.progressAmount, uploader.progressTotal);
    });

    uploader.on('end', () => {
        console.log('done uploading');
        done();
    });
}

function _buildNewProject(project) {
    // build obj
    const { title, description, github_url, demo_url, color, user } = project;
    const photo_url = `${process.env.BaseURL}${process.env.AWS_BUCKET}/${project.image.originalname}`;

    const newProjectObj = {
        title,
        description,
        github_url,
        demo_url,
        photo_url,
        color,
        user
    };

    return newProjectObj;
}

function _saveNewProject(project) {
    const newProject = new Project(project);

    return newProject.save().then(project => {
        return project;
    });
}

module.exports = {
    getAllProjects: function() {
        return Project.find().then(projects => projects);
    },
    getProject: function(_id) {
        return Project.findById(_id).then(project => project);
    },
    addProject: function(project, done) {

        _uploadFile(project.image, () => {
            fs.unlink(path.resolve(__dirname, '../', project.image.path), (err) => {
                if (err) throw err;
                console.log('delete img success');
            });

            const newProjectObj = _buildNewProject(project);

            _saveNewProject(newProjectObj).then(project => {
                done({ project, success: true });
            }).catch(err => {
                done({ err, success: false });
            });

        });
    },
};
