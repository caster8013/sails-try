/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,

  attributes: {
    // id: { type: 'integer', autoIncrement: true, primaryKey: true},

    name: {
      type: 'string',
      required: true
    },
    title: {
      type: 'string'
    },
    email: {
      type: 'string',
      email: true,
      required: true,
      unique: true
    },
    password: {
      type: 'string'
    },
    // gender: { type: 'string' },
    // age: { type: 'integer' },
    // weight: { type: 'float' },

    toJSON: function () {
      return _.omit(this, ['password', 'confirmation', '_csrf'])
    }

  },

  beforeCreate: (values, next) => {
    require('bcrypt').hash(values.password, 10, (err, encryptedPassword) => {
      if (err) return next(err);
      values.password = encryptedPassword;
      next();
    });
  }
};
