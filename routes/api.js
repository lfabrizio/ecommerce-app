const express = require('express');
const router = express.Router();
const User = require('../models/User');

 router.post('/api', function (req, res) {
 const userName = req.body.username;
 const userId = req.body.id;
 const message = req.body.message;
  const data = {
   username: userName,
   message: message
  }})
  
  router.get("/showprofile/:username", function (req, res) {
 const user = req.params.username;
 console.log(user);

 res.send("show profile working");
})


router.get("/", (req, res) => res.send("api route is working!"))
module.exports = router;


