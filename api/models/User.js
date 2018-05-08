/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  //https://sailsjs.com/documentation/reference/configuration/sails-config-datastores  
  datastore: 'userDb',

  //https://sailsjs.com/documentation/concepts/models-and-orm/attributes
  //https://sailsjs.com/documentation/concepts/models-and-orm/validations
  attributes: {
    firstName: {
      type: 'string',
      required: true
    },
    lastName: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      unique: true,
      required: true
    },
    userName:{
      type: 'string',
      unique: true,
      required: true
    },
    password: {
      type: 'string',
      //encrypt: true,
      required: true
    },
    roleId: {
      type: 'string',
      required: true
    },
  }
};

