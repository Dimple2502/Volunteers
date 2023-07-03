const express = require("express");
const router = express.Router();

const Signup = require("../models/Signup");

router.post('/login',async (req,res)=>{
    let username = req.body.username;
    let password = req.body.password;
    let user = await Signup.findOne({username:username, password:password});
    if (!user) {
        res.json({success:false , msg: "Invalid credentials" });
    }
    else {
        res.json({success:true , msg: "Login Successful!" });
    }
})

router.post('/Signup',async (req,res)=>{
    let username = req.body.username;
    let password = req.body.password;
    Signup.create({
        username : username,
        password : password
    })
    res.send({msg:"Signup Successful"})
})

module.exports = router;