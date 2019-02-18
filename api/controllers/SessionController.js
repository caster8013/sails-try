/**
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
let bcrypt = require('bcrypt');

module.exports = {
	new: (req, res) => {
        // let oldDateObj = new Date();
        // let newDateObj = new Date(oldDateObj.getTime() + 60000);
        // req.session.cookie.expires = newDateObj;
        // req.session.authenticated = true;
        // console.log(req.session);

        res.view();
    },

    create: (req, res) => {
        User.findOneByEmail(req.param('email'), (err, user) => {
          if (err) return next(err);

          if (!user) {
            let noAccountError = [{
              name: 'noAccount',
              message: 'The email address ' + req.param('email') + ' not found.'
            }]
            req.session.flash = {
              err: noAccountError
            }
            res.redirect('/session/new');
            return;
          }
        
          bcrypt.compare(req.param('password'), user.password, (err, valid) => {
            if (err) return next(err);

            if (!valid) {
              let usernamePasswordMismatchError = [{
                name: 'usernamePasswordMismatch',
                message: 'Invalid username and password combination.'
              }]
              req.session.flash = {
                err: usernamePasswordMismatchError
              }

              res.redirect('/session/new');
              return;
            }

            req.session.authenticated = true;
            req.session.User = user;

            res.redirect('/user/show/' + user.id);
          });
        });
    },

    destroy: (req, res, next) => {
        req.session.destroy();

        res.redirect('/session/new');
    }
};

