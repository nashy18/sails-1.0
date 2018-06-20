/**
 * QMR13/RawMaterial.js
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
    code: {
      type: 'string',
      unique: true,
      required: true
    },
    rawMaterialGroupId: {
      model: 'rawmaterialgroup',
      required: true
    }
  }
};

