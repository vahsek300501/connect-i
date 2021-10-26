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
  // TODO create a signup controller
}

module.exports.createSession = function(req,res) {
  // TODO create a signin controller
}