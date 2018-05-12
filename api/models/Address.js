/**
 * Address.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    streetLine1: {
      type: 'string',
      required: true
    },
    streetLine2: {
      type: 'string'
    },

    countryId:{
      model: "country",
      required : true
    },

    stateId:{
      model: "state",
      required : true
    },

    cityId:{
      model : "city",
      required : true
    },
    zipCode: {
      type: 'string',
      required: true
    },
    addressTypeId:{
      model : "addressType",
      required : true
    }
    
  },

};

