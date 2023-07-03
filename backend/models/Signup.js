const mongoose = require('mongoose');
const {Schema} = mongoose;

const signupSchema = new Schema({
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