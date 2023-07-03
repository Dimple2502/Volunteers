const mongoose = require('mongoose');
mongoose.set('strictQuery', true)
require('dotenv').config();


const mongoURI = "mongodb+srv://Dimple:Dimple_mongo@myprojects.pnera0h.mongodb.net/TeachForIndia";

const dbCon =() =>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to DB");
    })
}


module.exports = dbCon;