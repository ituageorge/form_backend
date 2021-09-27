var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Token = require("./tokenModel");

const config = require('../config.json');


// var Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema(
  {
    firstName: {type: String, maxlength: 100},
    lastName: {type: String,  maxlength: 100},
    username: {type: String,  maxlength: 100},
    email: {type: String,  maxlength: 100},
    password: {type: String,  maxlength: 100},
    date: {type: Date, default:Date.now},
    profileImg: {type: Buffer },
    // resetPassLink: {type: String, default: ''},
  }
);

//define schema level methods to create access token and refresh token:
UserSchema.methods = {
  createAccessToken: async function () {
    try {
      let { _id, username } = this;
      let accessToken = jwt.sign(
        { user: { _id, username } },
        config.secret,
        {
          expiresIn: "10m",
        }
      );
      return accessToken;
    } catch (error) {
      console.error(error);
      return;
    }
  },
  createRefreshToken: async function () {
    try {
      let { _id, username } = this;
      let refreshToken = jwt.sign(
        { user: { _id, username } },
        config.secretForRefreshToken,
        {
          expiresIn: "1d",
        }
      );

      await new Token({ token: refreshToken }).save();
      return refreshToken;
    } catch (error) {
      console.error(error);
      return;
    }
  },
};

 // roles: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Role"
    //   }
    // ],

// UserSchema.pre('save', function (next) {
//   var user = this;
//   bcrypt.hash(user.password, 10, function (err, hash) {
//     if (err) {
//       return next(err); }
//     user.password = hash;
//     next();
//   })
// });


UserSchema.pre('save', function (next) {
  // if (this.isNew || this.isModified('password'))
  var user = this;
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err); }
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
              return next(err); }
            user.password = hash;
            next()
    });   
  });
})

// userSchema.pre('save', async function(next){
//   if (this.isNew || this.isModified('password')) this.password = await bcrypt.hash(this.password, saltRounds)
//   next()
// })


// Virtual for user's full name
UserSchema
.virtual('name')
.get(function () {
  return this.lastName + ', ' + this.firstName;
});


// Virtual for user's image
UserSchema
.virtual('image')
.get(function () {
    return this.profileImg;
})


// Virtual for user's URL
UserSchema
.virtual('url')
.get(function () {
  return '/user/' + this._id;
});


// UserSchema.set("toJSON", {
//   transform: function(doc, ret) {
//     let retJson = {
//       createdAt: ret.createdAt,
//       id: ret._id,
//       token: ret.token,
//       updatedAt: ret.updatedAt,
//     }
//     return retJson
//   }
// })



//Export model

// var User = mongoose.model('User', UserSchema);

// module.exports = User

module.exports = User = mongoose.model("users", UserSchema);
// module.exports = mongoose.model('User', UserSchema, 'users');
