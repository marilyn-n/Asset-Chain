const express = require('express');

const router = express.Router();
const User = require('../models/User.js');
const Testament = require('../models/Testament.js');
const Asset = require('../models/Asset.js');
const EmailService = require('../models/EmailService');
// const driver = require('bigchaindb-driver')

router.get('/all', (req, res) => {
  Testament.find()
    .then(allTestaments => res.status(200).json(allTestaments));
});

// send testament on death with blockchain methods(not ready)
router.post('/new', (req, res) => {
  console.log(req.user);
  const myTestament = new Testament({
    owner: req.user._id,
    description: req.body.description,
    executorEmail: req.body.executorEmail,
  });

  myTestament.save()
    .then((result) => {
      hackToUpdateUser(req.user._id, result._id);
      res.json(result);
    })
    .catch(err => res.status(400).json({ message: err }));
});

// let bdb = new driver.Connection('https://test.bigchaindb.com/api/v1/', {
//         app_id: 'b5324ac9',
//         app_key: 'd06aea79d7643db7c33a8993a4140f5f'
// })

// const secret = new driver.Ed25519Keypair()
// const text = myTestament.description
// const metadata = {'user': 'jeff bezos'}

// const txCreateData = driver.Transaction.makeCreateTransaction(
//         text, metadata,
//     [ driver.Transaction.makeOutput(
//             driver.Transaction.makeEd25519Condition(secret.publicKey))
//     ],
//     secret.publicKey
// )

// const txCreateDataSigned = driver.Transaction.signTransaction(txCreateData, secret.privateKey)

// bdb.postTransaction(txCreateDataSigned)

function hackToUpdateUser(userId, testamentId) {
  User.findByIdAndUpdate(userId, { testament: testamentId }, { new: true })
    .then(res => console.log('ok', res));
}

router.get('/testament-details', (req, res) => {
  Testament.findById(req.user.testament)
    .populate('assets')
    .then(testament => res.json(testament))
    .catch(e => res.json(e));
});


router.post('/payment-method', (req, res) => res.status(403).json({ message: 'payment method' }));


module.exports = router;
