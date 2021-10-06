const express = require('express');
const path = require('path');

const db = require("./db.js");

const Job = require('./models/jobModel');

const jobsRoute = require('./routes/jobsRoute');
const userRoute = require('./routes/userRoute');

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());



app.use('/api/jobs/', jobsRoute);
app.use('/api/users/', userRoute)


const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}


app.get("/", (req, res) => {
    res.send("Server is workin on " + port)
});


app.listen(port, ()=>{
    console.log("server is running on " + port)
})