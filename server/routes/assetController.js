const express = require('express');

const router = express.Router();
const Asset = require('../models/Asset.js');
const multer = require('multer');
const Testament = require('../models/Testament.js');

const upload = multer({ dest: './public/uploads' });

router.post('/assets/benefitiaries', (req, res) => res
  .status(403)
  .json({ message: 'choose benefitiaries and add assets' }));

router.post(
  '/createAsset/:idTestament',
  upload.single('file'),
  (req, res) => {
    const newAsset = new Asset({
      assetName: req.body.assetName,
      beneficiaryName: req.body.beneficiaryName,
      beneficiaryEmail: req.body.beneficiaryEmail,
      description: req.body.description,
      idTestament: req.params.idTestament,
      file: `${req.file.filename}`,
    });
    newAsset.save()
      .then((respuesta) => {
        console.log(respuesta);
        Testament.findByIdAndUpdate(
          req.params.idTestament,
          { $push: { assets: respuesta._id } }, { new: true },
        )
          .then((testamentModified) => {
            res.status(200).json({ asset: respuesta, testament: testamentModified });
          });
      })
      .catch(err => res.status(400).json(err));
  },
);

router.get('/', (req, res) => {
  Asset.find()
    .then(assets => res.status(200).json(assets))
    .catch(err => res.status(400).json(err));
});

router.deleteCard = (req, res) => {
  Asset.deleteCard(req.body.item)
    .then(items => res.status(200).json(items))
    .catch(e => res.status(500).send(e));
};


module.exports = router;
