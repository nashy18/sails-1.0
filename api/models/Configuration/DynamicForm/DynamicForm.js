/**
 * Configuration/DynamicForm.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    labels:{
      type:"json",
      required: true
    },
    plantId:{
      model :"plant",
      required :true
    },
    rkCategoryId:{
      model :"rkCategory",
      required :true
    },
    rkSubCategoryId:{
      model :"rkSubCategory",
      required :true
    },
    formMetaData:{
      type:"json",
      required: true
    }
  },

};

