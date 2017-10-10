const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    pw_hash: {
        type: String,
    },
    projects: [
        type: Schema.Types.ObjectId,
        ref: 'Project'
    ]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
