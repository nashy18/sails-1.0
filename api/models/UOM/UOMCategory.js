/**
 * UOM/UOMCategory.js
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
    uiControlsCategoryId:{
      model:"uicontrolscategory",
      required: true
    },
    uiControlsSubCategoryId:{
      model:"uicontrolssubcategory"
    }
  }
};

