const express = require('express');
const router  = express.Router();
const Asset = require("../models/Asset.js");
const multer = require('multer');
const Testament    = require("../models/Testament.js");
const upload = multer ({dest:"./public/uploads"})

router.post('/assets/benefitiaries', (req, res) =>{
  return res.status(403).json({ message: "choose benefitiaries and add assets" });
});

router.post('/createAsset/:idTestament',upload.single("file"),(req, res, next) =>{
  
  const newAsset = new Asset ({
    assetName: req.body.assetName,
    beneficiaryName: req.body.beneficiaryName,
    beneficiaryEmail: req.body.beneficiaryEmail,
    description: req.body.description,
    idTestament:req.params.idTestament,
    file: `/uploads/${req.file.filename}`
  })
console.log("entrar al post de crear")
  newAsset.save()
    .then(respuesta => res.status(200).json(respuesta))
    .catch(err => res.status(400).json(err))
  
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
