const express = require("express");
const router = express.Router();

const Information = require("../models/Information");

router.get('/getInformation',async (req,res)=>{
    const info = await Information.find()
    res.send(info)
})

router.post('/addInformation',async (req,res)=>{
    const record = req.body;
    console.log(record);
    await Information.create(record)
    res.send("yes");
})

module.exports = router;