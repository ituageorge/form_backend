var mongoose = require('mongoose');
const bcrypt = require('bcrypt');


// var Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema(
  {
    firstName: {type: String, maxlength: 100},
    lastName: {type: String,  maxlength: 100},
    username: {type: String,  maxlength: 100},
    password: {type: String,  maxlength: 100},
    date: {type: Date, default:Date.now},
    profileImg: {type: Buffer }
  }
);


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
} )


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


//Export model

// var User = mongoose.model('User', UserSchema);

// module.exports = User

module.exports = User = mongoose.model("users", UserSchema);
// module.exports = mongoose.model('User', UserSchema, 'users');
