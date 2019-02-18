/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  signup: function (req, res) {

    // res.locals.flash = _.clone(req.session.flash);
    /**
     * !!!
     * The property will not be stored in the session store nor available to other requests until the response is sent.
     */
    // req.session.flash ={};
    res.view();
  },

  create: (req, res, next) => {
    User.create(req.params.all(), (err, user) => {

      if (err) {
        /**
         * !!!
         * same circimustance.
         * The property will not be stored in the session store nor available to other requests until the response is sent.
         */
        req.session.flash = {
          err: err
        };
        return res.redirect('/user/signup');
      }

      req.session.flash = {};
      res.redirect('/user/show/' + user.id);
    });
  },

  show: (req, res, next) => {

    // code below works fine
    // User.findOne(req.param('id'),(err, user) => {
    //   if(err) return next(err);

    //   if(!user) return next();

    //   res.view({user: user});
    // });

    User.findOne(req.param('id'))
      .then((user) => {
        res.view({
          user: user
        });
      })
      .catch((err) => {
        if (err) return next(err);
        if (!user) return next();
      });
  },

  index: (req, res, next) => {

    console.log(new Date());
    console.log(req.session.authenticated);

    User.find({})
      .then((users) => {
        res.view({
          users: users
        });
      })
      .catch((err) => {
        if (err) return next(err);
      });
  },

  edit: (req, res, next) => {
    User.findOne(req.param('id'))
      .then((user) => {
        res.view({
          user: user
        });
      })
      .catch((err) => {
        if (err) return next(err);
        if (!user) return next();
      });
  },

  update: (req, res, next) => {
    User.update(req.param('id'), req.params.all())
      .then(() => {
        res.redirect('/user/show/' + req.param('id'));
      })
      .catch((err) => {
        if (err) return res.redirect('/user/edit/' + req.param('id'));
      });
  },

  delete: (req, res, next) => {
    User.destroy(req.param('id'))
      .then((user) => {
        res.redirect("/user/index/");
      })
      .catch((err) => {
        if (err) return next(err);
      });
  }

};
