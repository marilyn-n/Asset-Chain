const express = require('express');
const router  = express.Router();
//Ensure user is logged in
// const ensureLoggedIn = require('connect-ensure-login');
const multer  = require('multer');
const upload  = multer({ dest: './public/uploads' });
const User    = require("../models/User.js");
const Testament    = require("../models/Testament.js");


router.post('/add-document', (req, res, next) =>{
 return res.status(403).json({ message: "start creating testament" });

});

router.post('/assets&benefitiaries', (req, res) =>{
  return res.status(403).json({ message: "choose benefitiaries and add assets" });
});

router.post('/payment-method',(req, res) => {
  return res.status(403).json({ message: "payment method whaaat" });

});


module.exports = router;


