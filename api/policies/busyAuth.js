/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = function(req, res, next) {
  console.log(' busyAuth policy: checking to see if the user is authenticated.');
  if (req.user) {
    console.log('user authenticated.');
    next();
    return;
  }

  console.log('user not authenticated.');

  res.forbidden();
  
};
