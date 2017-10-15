const multer = require('multer');
const s3     = require('s3');
const upload = multer({dest: '../uploads/'});
const keys   = require('../config/keys').AWS_KEYS;
const images = require('../config/images');
const client = s3.createClient(images.s3Options);

const _uploadImage = function(file, done) {
    let params = {
        localFile: file.path,

        s3Params: {
            Bucket: keys.AWSBucket,
            Key: file.originalname,
            ACL: 'public-read'
        }
    };

    let uploader = client.uploadFile(params);
    uploader.on('error', function(err) {
        console.error("unable to upload:", err.stack);
    });
    uploader.on('progress', function() {
        console.log("progress", uploader.progressMd5Amount, uploader.progressAmount, uploader.progressTotal);
    });
    uploader.on('end', function() {
        console.log("done uploading");
        done();
    });
}

module.exports = {
    addProject: function(body, file, done) {
        _uploadImage(file, () => {
            // add project
            done({ 'done': 'success' });
        });
    },
};
