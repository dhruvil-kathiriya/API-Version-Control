const mongoose = require('mongoose');
const path = require('path');
const multer = require("multer");
const imagepath = "/uploads/Admin";

const registerschema = mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    city: {
        type: String
    },
    gender: {
        type: String
    },
    hobby: {
        type: Array
    },
    admin_image: {
        type: String
    }
});

const imagestorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname), "../..", imagepath);
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now());
    }
})

registerschema.statics.uploadimage = multer({ storage: imagestorage }).single("admin_image");
registerschema.statics.adminimagepath = imagepath;

const register = mongoose.model('register', registerschema);

module.exports = register;