/**
 * Product.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: {
      type: 'string',
      required: true
    },
    customer: {
      type: 'string',
      required: true
    },
    codePicture: {
      type: 'string',
      required: true
    },
    netWeight:{
      type: 'string',
      required: true
    },
    lowWeight:{
      type: 'string',
      required: true
    },
    highWeight:{
      type: 'string',
      required: true
    },
    lowLimit:{
      type: 'string',
      required: true
    },
    highLimit:{
      type: 'string',
      required: true
    },
    bestBeforeDate:{
      type: 'string',
      required: true
    },
    dateCodeFormat:{
      type: 'string',
      required: true
    },
    upc:{
      type: 'string',
      required: true
    },
    gtin:{
      type: 'string',
      required: true
    },
    brandId:{
      model:"plant",
      required: true
    },
    brand: {
      collection: 'product',
      via: 'product'
    }  

  },

};

