var express = require('express');
var multer = require('multer');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const User = require('../model/userModel');

// const fileFunc = require('../controller/userController')

const config = require('../config.json');
var router = express.Router();

const DIR = '../tmp';

//for diskstorage
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, DIR);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix);
  },
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == 'image/png' ||
      file.mimetype == 'image/jpg' ||
      file.mimetype == 'image/jpeg'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  },
});

router.post('/upload', upload.single('profileImg'), async function (req, res) {
  // Everything went fine.
  // req.file is the name of your file in the form above, here 'profileImg'
  // req.body will hold the text fields, if there were any
  console.log('reqForMulter', req.file, req.body);

  try {
    const findUser = await User.findOne({username: req.body.username}).exec();
    console.log('findUser', findUser);
    // if (findUser !== null) {
    //     throw new Error('That user already exisits!');
    // }

    // validate
    if (findUser.username) {
      throw 'Username "' + req.body.username + '" is already taken';
    }

    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      password: req.body.password,
      profileImg: req.file.filename,
    });
    newUser.save();
    res.json(newUser);
  } catch (error) {
    console.error('Something went wrong', error);
  }
});

router.get('/', (req, res) => {
  res.send('Hello my World');
});



router.post('/login',  async(req, res) => {
  const findLoginUser = await User.findOne({ username: req.body.username }).exec();
      console.log('findLoginUser', findLoginUser)

   User.findOne({ username: req.body.username }, (err, user) => {
      if (err) return res.status(500).send('Error on the server.');
      if (!user) return res.status(404).send('No user found.');

      var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
      if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });

      var token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });

      res.status(200).send({ ...user.toJSON(), token: token });
    });
  });


router.get('/getLatest', async (req, res) => {
  const getUser = await User.findOne().sort({_id: -1});
  res.json(getUser);
});

// // to get individual user
// router.get('/users/:id', async (req, res) => {
//   const user = await User.findOne({_id: req.params.id })
//   res.send(user)
// })

module.exports = router;
