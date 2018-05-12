/**
 * Plant.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: {
      type: 'string',
      unique: true,
      required: true
    },
    addressId:{
      model:"address",
      required:true
    },
    phone:{
      type: 'string',
      required:true
    },
    fax:{
      type: 'string',
      required:true
    },
    

  },

};

