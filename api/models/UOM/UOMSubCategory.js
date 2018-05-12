/**
 * UOM/UOMSubCategory.js
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
    value: {
      type: 'string',
      unique: true,
      required: true
    },
    uomCategoryId:{
      model:"uomcategory",
      required: true
    },
    uomDataFormatId:{
      model:"uomdataformat"
    }
  },

};

