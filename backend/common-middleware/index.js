const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");
// const shortid = require("shortid");
// const path = require("path");

const admin_key = "SecretKey";


const requireLogin = (req, res, next) => {

    if(req.headers.authorization)
    {
    const token = req.headers.authorization.split(" ")[1];
    console.log(req.user)
    const user = jwt.verify(token, admin_key);
    req.user = user;
    
    next();
    //jwt.decode()
    }
    else{
        return res.status(400).json({ message: "Authorization required" });
    }
}
const userMiddleware = (req, res, next) => {
  if (req.user.role !== "user") {
    return res.status(400).json({ message: "Access denied" });
  }
  next();
};

const adminMiddleware = (req, res, next) => {
    var userId = req.user._id
    
    User.findOne({_id: userId})
    .then(user => {
        if (user.role !== "admin") {
            return res.status(400).json({ message: "Access denied" });
        }
        next();
    })
    .catch(error => {
        return res.status(400).json({ message: "No user for this token"});
    })

 
};


module.exports = {
    requireLogin , userMiddleware , adminMiddleware
}