
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');

const register_admin = (req,res,next) => {

    User.findOne( {email:req.body.email})
    .exec(async (error,user)=> {
    if(error){
        if(user) return res.status(400).json({
            message: 'Admin already registered'
        })
    }
    
    bcrypt.hash(req.body.password,10,function(err,hashedPass){
        if (err) {
            return res.json({
                error: err
            })
        }

        let _user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            contactNumber: req.body.contactNumber,
            password: hashedPass,
            username: (req.body.firstName+req.body.lastName+Math.random().toString()).toLowerCase(),
            role: 'admin'
        })
        _user.save()
        if(_user) {
            return res.json({
                message: "Admin Added Successfully"
            })
        }
        else{
            return res.json({
                message: "Error occured 1"
            })
        }
    }) 
})

}


const login_admin = (req,res,next) => {
    var email = req.body.email
    var password = req.body.password

    User.findOne({'email':email})
    .then(user => {
        if(user){
            bcrypt.compare(password,user.password,function(err,result){
                if (err) {
                    return res.json({
                        error:err
                    })
                }
                
                if(result && user.role === "admin"){
                    let token = jwt.sign({_id:user._id,role:user.role},'SecretKey',{expiresIn:'1h'})
                    const {_id, firstName, lastName, email, role, fullName } = user;
                    res.cookie("token", token, { expiresIn: "1d" });
                    return res.json({
                        message:"Login Successful!", token, user:{_id, firstName, lastName, email, role, fullName}
                    })
                }
                else {
                    return res.json({
                        message: "Password does not match!"
                    })
                }
            })
        }
        else{
        return res.json({
            message: "No admin found!"
        })
    }
    })

}

const logout_admin = (req, res) => {
    res.clearCookie("token");
    res.status(200).json({
      message: "Signout successfully...!",
    });
  };
module.exports = {
    register_admin,login_admin,logout_admin
}