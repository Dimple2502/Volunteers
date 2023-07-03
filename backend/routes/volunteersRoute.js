const express = require("express");
const router = express.Router();

const Volunteer = require("../models/Volunteers");

router.get('/getVolunteers',async (req,res)=>{
    const volunteers = await Volunteer.find()
    res.send(volunteers)
})

router.post('/addVolunteers',async (req,res)=>{
    const record = req.body;
    console.log(record);
    await Volunteer.create(record)
    res.send("yes");
})

module.exports = router;