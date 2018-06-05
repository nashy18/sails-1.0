/**
 * Brand.js
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
    plantId:{
      model:"plant",
      required: true
    },
    product: {
      collection: 'product',
      via: 'brand'
    },
    item: {
      model: 'itemcode'
    }  
  },

};

