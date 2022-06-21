
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');


const register_admin = (req,res,next) => {

    User.findOne( {email:req.body.email})
    .exec((error,user) => {
    bcrypt.hash(req.body.password,10,function(err,hashedPass){
        if (err) {
            res.json({
                error: err
            })
        }

        let user = new User({
            firstname: req.body.firstName,
            lastname: req.body.lastName,
            email: req.body.email,
            contactNumber: req.body.contactNumber,
            password: hashedPass,
            username: Math.random().toString(),
            role: 'admin'
        })
        user.save()
        .then(user => {
            res.json({
                message: "Admin Added Successfully"
            })
        })
        .catch(error => {
            res.json({
                message: "Error occured"
            })
        })
    })  
    })
}


const login_admin = (req,res,next) => {
    var email = req.body.email
    var password = req.body.password

    Admin.findOne({'email':email})
    .then(user => {
        if(user){
            bcrypt.compare(password,user.password,function(err,result){
                if (err) {
                    res.json({
                        error:err
                    })
                }
                if(result && user.role === "admin"){
                    let token = jwt.sign({_id:user._id},'adminSecretKey',{expiresIn:'1h'})
                    const {_id, firstName, lastName, email, role, fullName } = user;
                    res.json({
                        message:"Login Successful!", token, user:{_id, firstName, lastName, email, role, fullName}
                    })
                }
                else {
                    res.json({
                        message: "Password does not match!"
                    })
                }
            })
        }
        else{
        res.json({
            message: "No user found!"
        })
    }
    })

}

// const logout = (req,res,next) => {

// }
module.exports = {
    register_admin,login_admin
}