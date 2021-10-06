const mongoose = require('mongoose');

mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser:true});

 var db = mongoose.connection

 db.on('connected', ()=>{
     console.log('MongoDb connection successfull');
 })

 db.on('error', ()=>{
     console.log('MongoDB connection fails'); 
 })

 module.exports = mongoose;