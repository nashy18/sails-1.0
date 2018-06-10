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
      utils = require( '../api/common/Utils' ).utils,
      emailProvider = require( '../api/providers/EmailProvider' );
//Dependency injection for common modules
module.exports.bootstrap = (done)=> {
  

  //3rd party modules
  sails.moment = moment;
  sails.uuid = uuid;
  sails.request = request;

  //custom modules
  sails.enums = enums;
  sails.utils = utils;    

  //providers
  sails.providers = {
    email:emailProvider
  }

  //configuration
  sails.custom_config = {
    "endpointURL" : "http://18.191.2.115:3000/",
    "email":{
      "mailgun":{
        "host" : "smtp.mailgun.org",
        "port" : 587,
        "username" : "dd@sandboxe35d5b33c97946968312641957697114.mailgun.org",
        "password" : "Power@1234",
        "apiKey": 'key-ed631b75ec3a7bdd072b9d42a6ec29aa',
        "domain": 'sandboxe35d5b33c97946968312641957697114.mailgun.org'
      }
    }
  } 

  return done();

};
