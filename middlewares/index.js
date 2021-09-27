const jwt = require("jsonwebtoken");
const config = require("../config.json");
// const privateKey = process.env.ACCESS_TOKEN_SECRET;

String.prototype.includes = function (str) {
  var returnValue = false;

  if (this.indexOf(str) !== -1) {
    returnValue = true;
  }

  return returnValue;
}

//middleware function to check if the incoming request in authenticated:
const checkAuth = (req, res, next) => {
// exports.checkAuth = (req, res, next) => {
  // get the token stored in the custom header called 'x-auth-token'
  const token = req.get("x-auth-token");
  console.log('token', token);

  //send error message if no token is found:
  if (!token) {
    return res.status(401).json({ error: "Access denied, token missing!" });
  } else {
    try {
      //if the incoming request has a valid token, we extract the payload from the token and attach it to the request object.
      const payload = jwt.verify(token, config.secret);
      
      req.user = payload.user;
      next();
    } catch (error) {
      // token can be expired or invalid. Send appropriate errors in each case:
      if (error.name === "TokenExpiredError") {
        return res
          .status(401)
          .json({ error: "Session timed out,please login again" });
      } else if (error.name === "JsonWebTokenError") {
        return res
          .status(401)
          .json({ error: "Invalid token, please login again!" });
      } else {
        //catch other unprecedented errors
        console.error(error);
        return res.status(400).json({ error });
      }
    }
  }
};

const authorizeWithAccessToken =  (permissions) => {
  return  (req, res, next) => {
    try {
      const accessToken =  req.params.accessToken;
    const userId = req.params.userId
    console.log("acesToken", accessToken)
    console.log("userId", userId)
    if(accessToken !== null){
      next()
    } else{
     return res
      .status(401)
      .json("Session timed out,please login again");
    }
    } catch (error) {
      console.error(error)
      return res.status(401).json({ error });
    } 
  }
}

module.exports = {authorizeWithAccessToken, checkAuth}