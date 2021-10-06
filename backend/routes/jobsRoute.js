const express = require('express');
const router = express.Router();

const Jobs = require('../models/jobModel')

router.get("/getjobs", async (req, res) => {

    try {
        const jobs = await Jobs.find({})
        res.send(jobs)
    } catch (error) {
        return res.status(400).json({ message: error });

    }
})

router.post("/addjob", async (req,res)=>{
    
    const job = req.body.job

    try {
        const newjob = new Jobs({
            position : job.position,
            experience : job.experience,
            skill : job.skill,
            image : job.image
        })
        await newjob.save()
        res.send('Job added successfully')
    } catch (error) {
       return res.status(400).json({message : 'Not added' +error}) 
    }
})


router.post("/deletejob", async (req, res)=>{
    const itemid = req.body.itemid
    
    try {
        await Foods.findOneAndDelete({_id : itemid})
        res.send("job deleted successfully")
    } catch (error) {
        return res.status(400).json({ message : error})
    }
})

module.exports = router;