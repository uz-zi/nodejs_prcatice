const express = require('express')
const router = express.Router()
const controler = require('./constroller.js')


router.get("/signIn", controler.signInUser);


module.exports = router