const express = require('express');
const router  = express.Router();
//Ensure user is logged in
// const ensureLoggedIn = require('connect-ensure-login');
const multer  = require('multer');
const upload  = multer({ dest: './public/uploads' });
const User    = require("../models/User.js");
const Testament    = require("../models/Testament.js");


// router.post('/add-document', () )

router.post('/add-document', (req, res, next) =>{
    const myTestament = new Testament({
     owner: req.body.owner,
     description: req.body.description
   });
   myTestament.save()
   return res.status(403).json({ message: "start creating testament" });


  //  Testament.findOneAndUpdate({}, req.body.testament, update, function (err, result){
  //   if(err) res.send('sending your new testament failed')
  //   res.send('updated your testament')
  //  });
 


//save in the model Testament
//push the testament to user
//where the f... is the user? (req.user)
});

router.post('/assets/benefitiaries', (req, res) =>{
  //files
  return res.status(403).json({ message: "choose benefitiaries and add assets" });
});

router.post('/payment-method',(req, res) => {
  return res.status(403).json({ message: "payment method whaaat" });
});


module.exports = router;


