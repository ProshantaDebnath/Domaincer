const express = require('express');

const db = require("./db.js");

const Job = require('./models/jobModel');

const jobsRoute = require('./routes/jobsRoute');
const userRoute = require('./routes/userRoute');

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());



app.use('/api/jobs/', jobsRoute);
app.use('/api/users/', userRoute)


if(process.env.NODE_ENV ==='production'){

    app.use('/', express.static('client/build'))

    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client/build/index.html'))
    })
}


app.get("/", (req, res) => {
    res.send("Server is workin on " + port)
});

// app.get("/getjobs", (req, res) =>{

//     Job.find({}, (err, docs)=>{
//         if(err){
//             console.log(err);
//         }else{
//            res.send(docs); 
//         }
//     })
// })


app.listen(port, ()=>{
    console.log("server is running on " + port)
})