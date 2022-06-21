
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');
// const User = require('../models/UserModel');

const register = (req,res,next) => {

    
    User.findOne({email: req.body.email})
    .exec((error, user) => {
        if(user) return res.status(400).json({
            message: 'User already registered'
        });
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
            username: Math.random().toString()
        })
        user.save()
        .then(user => {
            res.status(201).json({
                message: "User Added Successfully"
            })
        })
        .catch(error => {
            res.status(400).json({
                message: "Error occured"
            })
        })
    })  
}
)
}

const login = (req,res,next) => {

    var username = req.body.username
    var password = req.body.password

    User.findOne({'email':username})
    .then(user => {
        if(user){
            bcrypt.compare(password,user.password,function(err,result){
                if (err) {
                    res.json({
                        error:err
                    })
                }
                if(result){
                    let token = jwt.sign({_id:user._id},'secretKey123',{expiresIn:'1h'})
                    const {_id, firstName, lastName, email, role, fullName } = user;
                    res.json({
                        message:"Login Successful!", token, user: {_id, firstName, lastName, email, role, fullName}
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

module.exports = {
    register,login
}