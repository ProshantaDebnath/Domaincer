const express = require('express');

const db = require("./db.js");

const Job = require('./models/jobModel');

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is workin on " + port)
});

app.get("/getjobs", (req, res) =>{

    Job.find({}, (err, docs)=>{
        if(err){
            console.log(err);
        }else{
           res.send(docs); 
        }
    })
})

app.listen(port, ()=>{
    console.log("server is running on " + port)
})