/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also do this by creating a hook.
 *
 * For more information on bootstrapping your app, check out:
 * https://sailsjs.com/config/bootstrap
 */
const uuid = require('uuid/v4'),
      moment = require('moment'),
      request = require('request'),
      enums = require( '../api/common/Enums' ).enums,
      utils = require( '../api/common/Utils' ).utils;
//Dependency injection for common modules
module.exports.bootstrap = (done)=> {
  

  //3rd party modules
  sails.moment = moment;
  sails.uuid = uuid;
  sails.request = request;

  //custom modules
  sails.enums = enums;
  sails.utils = utils;    

  //configuration
  sails.custom_config = {
    "endpointURL" : "http://18.191.2.115:3000/"
  } 

  return done();

};
