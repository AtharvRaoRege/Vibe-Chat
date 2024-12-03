var express = require('express');
var router = express.Router();
const UserModel = require('../models/UserSchema');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register');
});
router.post('/register', async function(req, res, next) {
  const { username, password } = req.body;
  
  // Here, you would normally add logic to save the user to your database
  if (!username || !password) {
    return res.status(400).send('All fields are required');
  }
  const user = await UserModel.create({
    username,
    password
  })

  // Simulate successful registration
  res.status(201).send('User registered successfully');
});

module.exports = router;
