const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    github_url: {
        type: String,
        required: true
    },
    demo_url: {
        type: String,
        required: true
    },
    photo_url: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
