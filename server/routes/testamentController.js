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

// send testament on death with blockchain methods(not ready)
router.post('/new', (req, res, next) =>{
  console.log(req.user)
    const myTestament = new Testament({
     owner: req.user._id,
     description: req.body.description,
     executorEmail: req.body.executorEmail,
   });

   myTestament.save()
    .then(result =>{
        hackToUpdateUser(req.user._id, result._id);
        res.json(result);
      })
    .catch(err => res.status(400).json({message:err}))
  });

function hackToUpdateUser(userId, testamentId){
  User.findByIdAndUpdate(userId, {testament:testamentId}, {new:true})
  .then(res=>console.log('ok',res));
}

// show testament 
//ruta por la cual , nos devuelva el testamento y los bienes relacionados con la misma.
router.get('/testament-details', (req, res) => {
  // console.log("dentro de details")
  // Testament.find({owner:req.user._id})
  // .populate('assets')
  // .then(result1 => {
  //   console.log(result1)
  //   Asset.find({idTestament: result1._id})
  //     .then(result2 =>  {
  //       console.log(result2)
  //       const resultTotal= {
  //         testament:result1,
  //         assets:result2
  //       }
  //       res.status(200).json(resultTotal)
  //     })
  // })

  Testament.findById(req.user.testament)
  .populate('assets')
  .then(testament=>res.json(testament))
  .catch(e=>res.json(e))
})


router.post('/payment-method',(req, res) => {
  return res.status(403).json({ message: 'payment method' });
});


module.exports = router;


