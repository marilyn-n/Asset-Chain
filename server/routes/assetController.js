const express = require('express');
const router  = express.Router();
const Asset = require("../models/Asset.js")

router.post('/createAsset/:idTestament', (req, res) =>{
  const listAsset = [];

  for(i = 0; i < req.body.title.length; i++) {
    listAsset.push({
      title: req.body.title[i], 
      emailTo: req.body.emailTo[i],
      description: req.body.description[i],
      idTestament: req.params.idTestament
    });
  }
  Asset.create(listAsset, (err, result) => {
    if(err){res.status(400).json(err)}
    res.status(200).json(result)
  })
});



module.exports = router;
