const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 8080
const keys = require("./keys");
const User = require("./models/user");

const mongoose = require('mongoose');
mongoose.connect(keys.mongoDBUrl, { useNewUrlParser: true }).then(() => console.log("DB connected"));

app.use(bodyParser.json());

app.use('/', express.static("public"));

app.get('/', (req, res) => res.send('Hello World!'))

var data = [];
    app.post('/api', function (req, res) {
 const userName = req.body.username;
 const userId = req.body.id;
 const message = req.body.message;
  const data = {
   username: userName,
   message: message
 }
console.log(data)

 const user = new User(data)
 user.save()
   .then(() => res.send(data))
   .catch(err => console.log(err))

})


app.get("/getallusers", function (req, res) {
 res.send(data)
})


app.get("/showprofile/:username", function (req, res) {
 const user = req.params.username;
 console.log(user);

 res.send("show profile working");
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
