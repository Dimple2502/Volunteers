const mongoose = require('mongoose');
const {Schema} = mongoose;

const signupSchema = new Schema({
    userId : {
        type : Number,  
        required : true,
    },
    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true,
    },
  });

const Signup = mongoose.model('Signup', signupSchema);
module.exports = Signup; 