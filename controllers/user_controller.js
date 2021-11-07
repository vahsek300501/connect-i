const User = require("../models/user");

module.exports.profile = function(req,res) {
  res.end("<h1>USER PROFILE</h1>");
}

// render the sign up page
module.exports.signUp = function(req,res) {
  return res.render('user_signup', {
    title:"SIGNUP"
  })
}

// render the sign in page
module.exports.signIn = function(req,res) {
  return res.render('user_signin', {
    title:"signin"
  })
}

module.exports.create = function(req,res) {
  if(req.body.password != req.body.confirm_password) {
    res.redirect('back');
  }
  User.findOne({email:req.body.email},function(err,user) {
    if(err){console.log("error in finding user in singing up"); return;}
    if(!user) {
      User.create(req.body,function(err,user) {
        if(err){console.log(err);return;}
        return res.redirect('/users/sign-in');
      })
    } else {
      return res.redirect('/users/sign-in');
    }
  })
}

module.exports.createSession = function(req,res) {
  // TODO create a signin controller
}