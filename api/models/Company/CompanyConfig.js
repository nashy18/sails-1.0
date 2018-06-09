/**
 * Configuration/Company/CompanyConfig.js
 *
 * @description :: It will contain all configuration specific to a company
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    companyId: {
      model: 'company',
      unique: true,
      required: true
    } 
  },

};

//As of now keep all info into json field
