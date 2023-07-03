const express = require("express");
const router = express.Router();

const Signup = require("../models/Signup");

router.get('/getSignup',async (req,res)=>{
    const signup = await Signup.find()
    res.send(signup)
})

router.post('/addSignup',async (req,res)=>{
    const record = req.body;
    console.log(record);
    await Signup.create(record)
    res.send("yes");
})

module.exports = router;