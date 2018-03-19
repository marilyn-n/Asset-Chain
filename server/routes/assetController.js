const express = require('express');
const router  = express.Router();
const Asset = require("../models/Asset.js");
const multer = require('multer');
const Testament    = require("../models/Testament.js");
const upload = multer ({dest:"./public/upload"})

router.post('/assets/benefitiaries', (req, res) =>{
  return res.status(403).json({ message: "choose benefitiaries and add assets" });
});

router.post('/createAsset/:idTestament',(req, res, next) =>{
  const arrayAsset = [];
  for(i = 0; i < req.body.assetName.length; i++) {
    arrayAsset.push({
    assetName: req.body.assetName[i], 
    files: req.body.files[i],
    beneficiaryName: req.body.beneficiaryName[i],
    beneficiaryEmail: req.body.beneficiaryEmail[i],
    description: req.body.description[i],
    idTestament: req.params.idTestament[i]
    });
  }
  console.log(arrayAsset)
  Asset.create(arrayAsset, (err, result) => {
    if(err){res.status(400).json(err)}
    res.status(200).json(result)
  })
});

// =============================================================CRUD
router.putAsset = (req,res, next) =>{

}

router.deleteAsset = (req,res,next) => {
  Asset.findByIdAndRemove(req.params.id)
  .then(lists=>res.status(200).json(lists))
  .catch(e=>res.status(500).send(e));
}


exports.patchAsset = (req,res,next) => {
  Asset.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(list=>res.status(200).json(list))
  .catch(e=>res.status(500).send(e));
}



module.exports = router;
