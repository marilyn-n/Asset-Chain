const express = require('express');

const authController = express.Router();
const passport = require('passport');
const User = require('../models/User');
const bcrypt = require('bcrypt');

const bcryptSalt = 19;
const multer = require('multer');

const upload = multer({ dest: './public/uploads' });

authController.post('/signup', upload.single('file'), (req, res) => {
  if (!req.body.username || !req.body.lastName || !req.body.email || !req.body.password) {
    res.status(400).json({ message: 'Please provide all the fields to sign up' });
  }

  User.findOne({ username: req.body.username, email: req.body.email }, 'username', (err, user) => {
    if (user !== null) {
      res.status(400).json({ message: 'The username already exists' });
      return;
    }
    console.log('el usuario esta logueado!');
    const hashPass = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(bcryptSalt), null);

    const newUser = new User({
      username: req.body.username,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashPass,
      picPath: `/uploads/${req.file.filename}`,
    });

    console.log(newUser);

    // Vieja forma de guardar un User

    // newUser.save((err) => {
    //   if (err) { res.status(400).json({ message: 'Something went wrong' }); }
    //   else {
    //     console.log('creating!!')
    //     req.login(newUser, (err) => {
    //       if (err) { return res.status(500).json({ message: 'Something went wrong' }); }
    //       res.status(200).json(req.user);
    //     });
    //   }
    // });

    // Nueva forma de guardar el user , con Promesas

    newUser.save()
      .then((user) => {
        req.login(user, (err) => {
          if (err) { return res.status(500).json({ message: 'Something went wrong' }); }
          res.status(200).json(req.user);
        })
          .catch(err => res.status(400).json({ message: 'Something went wrong' }));
      });
  });
});

authController.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) { return res.status(401).json(err); }
    if (!user) { return res.status(401).json(info); }

    req.login(user, (err) => {
      if (err) { return res.status(500).json({ message: 'Something went wrong' }); }
      return res.status(200).json(req.user);
    });
  })(req, res, next);
});

authController.get('/loggedin', (req, res) => {
  if (req.isAuthenticated()) { return res.status(200).json(req.user); }
  return res.status(403).json({ message: 'Unauthorized' });
});


authController.post('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ message: 'Success' });
});

// aqui es un patch del usuario que deberia estar en user en vez de aqui...
authController.patch('/update/user', (req, res) => {
  User.findByIdAndUpdate(req.user._id, req.body, { new: true })
    .then(user => res.json(user))
    .catch(e => res.json(e));
});


module.exports = authController;
