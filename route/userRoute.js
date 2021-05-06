var express = require('express');
var multer = require('multer');
const User = require('../model/userModel');
// const fileFunc = require('../controller/userController')
const config = require('../config.json');
var router = express.Router();

const DIR = '../tmp';

//for diskstorage
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, DIR)
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  var upload = multer({ storage: storage, 
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
})

  router.post('/upload', upload.single('profileImg'), async function (req, res) {

        // Everything went fine.
         // req.file is the name of your file in the form above, here 'profileImg'
    // req.body will hold the text fields, if there were any 
    console.log('reqForMulter', req.file, req.body);


    try {
              const newUser = new User({
                  firstName: req.body.firstName,
                  lastName: req.body.lastName,
                  username: req.body.username,
                  password: req.body.password,
                  profileImg : req.file.filename
                  });
              await newUser.save();
              res.json(newUser)
          } catch (error) {
              console.error('Something went wrong', error);
          }
        
   
 });

router.get('/', (req, res) => {
  res.send('Hello my World');
});

// router.post('/upload', async (req, res) => {
//     try {
//         const newUser = new User({
//             firstName: req.body.firstName,
//             lastName: req.body.lastName,
//             username: req.body.username,
//             password: req.body.password,
//             imageUrl: req.body.imageUrl
//             });
//         await newUser.save();
//         res.json(newUser)
//     } catch (error) {
//         console.error('Something went wrong', error);
//     }
// });

router.get('/getLatest', async (req, res) => {
    const getUser = await User.findOne().sort({_id: -1});
    res.json(getUser)
})






// // to get individual user
// router.get('/users/:id', async (req, res) => {
//   const user = await User.findOne({_id: req.params.id })
//   res.send(user)
// })


module.exports = router;
