const mongoose = require('mongoose');
const {Schema} = mongoose;

const infoSchema = new Schema({
    userId : {
        type : Number,  
        required : true,
    },
    location : {
        type : String,
        required : true
    },
    languages : {
        type : String,
        required : true,
    },
    availability : {
        type : String,  
        required : true,
    },
  });

const Information = mongoose.model('Information', infoSchema);
module.exports = Information; 