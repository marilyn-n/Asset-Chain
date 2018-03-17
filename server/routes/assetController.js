const express = require('express');
const router  = express.Router();
const Asset = require("../models/Asset.js");
const multer = require('multer');
const upload = multer ({dest:"./public/upload"})

router.post('/createAsset/:idTestament',(req, res, next) =>{


  // const listAsset = [];

  // for(i = 0; i < req.body.title.length; i++) {
  //   listAsset.push({
  //     title: req.body.title[i], 
  //     emailTo: req.body.emailTo[i],
  //     description: req.body.description[i],
  //     idTestament: req.params.idTestament,
  //     docs: [i]
  //   });
  // }
  // console.log(listAsset)
  // Asset.create(listAsset, (err, result) => {
  //   if(err){res.status(400).json(err)}
  //   res.status(200).json(result)
  // })
});
// =============================================================CRUD
router.deleteAsset = (req,res,next)=>{
  Asset.findByIdAndRemove(req.params.id)
  .then(lists=>res.status(200).json(lists))
  .catch(e=>res.status(500).send(e));
}


exports.patchAsset = (req,res,next)=>{
  Asset.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(list=>res.status(200).json(list))
  .catch(e=>res.status(500).send(e));
}


module.exports = router;
