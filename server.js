const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 8080
const api = require('./routes/api');
const keys = require("./keys");
const User = require("./models/User");

const mongoose = require('mongoose');
mongoose.connect(keys.mongoDBUrl, { useNewUrlParser: true }).then(() => console.log("DB connected"));

app.use(bodyParser.json());

app.use("/api", api);

app.use('/', express.static("public"));

app.get('/', (req, res) => res.send('Hello World!'))

var data = [];
   
console.log(data)

 const user = new User(data)
 user.save()
   .then(() => res.send(data))
   .catch(err => console.log(err))




app.get("/getallusers", function (req, res) {
 res.send(data)
})


app.get("/showprofile/:username", function (req, res) {
 const user = req.params.username;
 console.log(user);

 res.send("show profile working");
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
