/**
 * Configuration/Product/ProductConfig.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    productDetailsId: {
      model: 'productdetails',
      required: true
    } 

  },

};

/*
Validation before add-

-> productDetailsId & Company ID can't be duplicate.

*/