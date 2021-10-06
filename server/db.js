const mongoose = require('mongoose');

var mongoURL = 'mongodb+srv://recruiter:recruiter852@mern-recrutment.dqzrj.mongodb.net/mern-recruitment'

mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser:true});

 var db = mongoose.connection

 db.on('connected', ()=>{
     console.log('MongoDb connection successfull');
 })

 db.on('error', ()=>{
     console.log('MongoDB connection fails'); 
 })

 module.exports = mongoose;