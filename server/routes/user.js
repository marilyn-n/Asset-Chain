const express = require('express');
const router  = express.Router();
//Ensure user is logged in
// const ensureLoggedIn = require('connect-ensure-login');
const multer  = require('multer');
const upload  = multer({ dest: './public/uploads' });
const User    = require("../models/User.js");
const Testament    = require("../models/Testament.js");

router.get("/private", (req, res) => {
  if (req.isAuthenticated()) { return res.json({ message: req.user.username }); }
  return res.status(403).json({ message: "Unauthorized" });
});

router.patch =(req, res, next)=>{
  User.findByIdAndUpdate(req.body.username)
  .then(item=>res.status(200).json(item))
  .catch(e=>res.status(500).send(e));

}

module.exports = router;
