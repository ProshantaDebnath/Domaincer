const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({

    position : { 
        type : String, 
        require 
    },
    experience : { 
        type : String, 
        require
    },
    image : { 
        type : String, 
        require
    },
    skill : { 
        type : String, 
        require
    }
}, {
    timestamps: true,
})

const jobModel = mongoose.model('jobs', jobSchema);
module.exports = jobModel;