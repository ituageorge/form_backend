var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    firstName: {type: String, maxlength: 100},
    lastName: {type: String,  maxlength: 100},
    username: {type: String,  maxlength: 100},
    password: {type: String,  maxlength: 100},
    profileImg: {type: Buffer },
    permissionLevel: {type: Number}
  }
);

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
module.exports = mongoose.model('User', UserSchema);