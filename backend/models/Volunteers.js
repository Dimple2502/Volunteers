const mongoose = require('mongoose');
const {Schema} = mongoose;

const volunteersSchema = new Schema({
    userId : {
        type : Number,  
        required : true,
    },
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
    },
    contact : {
        type : Number,  
        required : true,
    },
    dob : {
        type : Date,
        default : Date.now
    }
  });

const Volunteers = mongoose.model('Volunteers', volunteersSchema);
module.exports = Volunteers; 