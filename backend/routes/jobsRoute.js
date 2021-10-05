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

module.exports = router;