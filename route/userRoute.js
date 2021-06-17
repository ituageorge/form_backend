var express = require('express');
var multer = require('multer');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const User = require('../model/userModel');
const Token = require('../model/tokenModel');
const Middleware = require("../middlewares")

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
    let newUser = await User.findOne({username: req.body.username}).exec();
    console.log('newUser', newUser);
    // if (findUser !== null) {
    //     throw new Error('That user already exisits!');
    // }

    // validate
    if (newUser !== null) {
      throw 'Username "' + req.body.username + '" is already taken';
    }

    newUser = await new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      password: req.body.password,
      profileImg: req.file.filename,
    }).save();
    // findUser = newUser.save();
    let accessToken = await newUser.createAccessToken();
    let refreshToken = await newUser.createRefreshToken();

    return res.status(201).json({accessToken, refreshToken});
    // res.json(newUser);
  } catch (error) {
    console.error('Something went wrong', error);
  }
});

router.get('/', (req, res) => {
  res.send('Hello my World');
});

router.post('/login', async (req, res) => {
  try {
    //check if user exists in database:
    const findLoginUser = await User.findOne({
      username: req.body.username,
    }).exec();
    console.log('findLoginUser', findLoginUser);

    // send error if no user found
    if (!findLoginUser) {
      return res.status(404).json({error: 'No user found!'});
    } else {
      //check if password is valid:
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        findLoginUser.password,
      );

      if (!passwordIsValid) {
        return res.status(401).send({auth: false, token: null});
      } else {
        //generate a pair of tokens if valid and send
        let accessToken = await findLoginUser.createAccessToken();
        let refreshToken = await findLoginUser.createRefreshToken();

        return res.status(201).json({accessToken, refreshToken});
      }
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({error: 'Internal Server Error!'});
  }
});

router.get('/refreshtoken', async (req, res) => {
  try {
    //get refreshToken
    const {refreshToken} = req.body;
    //send error if no refreshToken is sent
    if (!refreshToken) {
      return res.status(403).json({error: 'Access denied,token missing!'});
    } else {
      //query for the token to check if it is valid:
      const tokenDoc = await Token.findOne({token: refreshToken});
      //send error if no token found:
      if (!tokenDoc) {
        return res.status(401).json({error: 'Token expired!'});
      } else {
        //extract payload from refresh token and generate a new access token and send it
        const payload = jwt.verify(
          tokenDoc.token,
          config.secretForRefreshToken,
        );
        const accessToken = jwt.sign({user: payload}, config.secret, {
          expiresIn: '10m',
        });
        return res.status(200).json({accessToken});
      }
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({error: 'Internal Server Error!'});
  }
});

router.delete('/logout', async (req, res) => {
  try {
    //delete the refresh token saved in database:
    const { refreshToken } = req.body;
    await Token.findOneAndDelete({ token: refreshToken });
    return res.status(200).json({ success: "User logged out!" });
  } catch (error) {
    
  }
})

//@route GET /api/protected_resource
//@access to only authenticated users
router.get("/protected_resource", Middleware.checkAuth, (req, res) => {
  return res.status(200).json({ user: req.user });
});

router.get('/getLatest', Middleware.checkAuth, async (req, res) => {
  const getUser = await User.findOne().sort({_id: -1});
  res.json(getUser);
});

// // to get individual user
// router.get('/users/:id', async (req, res) => {
//   const user = await User.findOne({_id: req.params.id })
//   res.send(user)
// })

module.exports = router;
