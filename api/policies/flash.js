module.exports = (req, res, next) => {
  res.locals.flash = {};

  if (!req.session.flash) return next();

  res.locals.flash = _.clone(req.session.flash);

  req.session.flash = {};

  next();
};

/**
 * code snippet backup from signup.ejs.
 * 
 */

// <% if(flash && flash.err) { %> <
// ul class = "alert alert-success" >
//   <% Object.keys(flash.err).forEach(function(key) { %> <
//   li >
//   <%= JSON.stringify(flash.err[key]) %> <
//   /li>
// <% }) %> <
// /ul>
// <% } %>