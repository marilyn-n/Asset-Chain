const express = require('express');
const router  = express.Router();
const User    = require("../models/User.js");
const Testament    = require("../models/Testament.js");
const Asset = require ("../models/Asset.js")
const EmailService = require('../models/EmailService')

router.get('/all', (req,res,next)=> {
  Testament.find()
    .then(allTestaments => res.status(200).json(allTestaments))
})

// show testament 

// edit testament

// send testament on death with blockchain methods
router.post('/new', (req, res, next) =>{
  console.log(req.user)
    const myTestament = new Testament({
     owner: req.user._id,
     description: req.body.description,
     executorEmail: req.body.executorEmail,
     assetId: req.body.assetId,
     password: req.body.password,
     BlockchainSecret: req.body.BlockchainSecret,
     BlockchainIndex: req.body.BlockchainIndex
   });
   myTestament.save()
    .then(result =>res.status(200).json(result))
    .catch(err => res.status(400).json({message:err}))
});


//ruta por la cual , nos devuelva el testamento y los bienes relacionados con la misma.
router.get('/testament-details', (req, res, next) => {
  Testament.findOne({owner:req.user._id})
  .then(result1 => {
    console.log(result1)
    Asset.find({idTestament: result1._id})
      .then(result2 =>  {
        const resultTotal= {
          testament:result1,
          assets:result2
        }
        res.status(200).json(resultTotal)
      })
  })
})


router.post('/payment-method',(req, res) => {
  return res.status(403).json({ message: "payment method whaaat" });
});


module.exports = router;


