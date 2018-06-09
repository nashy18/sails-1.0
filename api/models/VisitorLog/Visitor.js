/**
 * VisitorLog/Visitor.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    firstName: {
      type: 'string',
      required: true
    },
    lastName: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      required: true
    },
    mobileNumber:{
      type: 'string',
      required: true
    },
    companyName: {
      type: 'string',
      required: true
    },
    departmentId: {
      model: 'department',
      required: true
    },
    employeeId:{
      model: 'user', //employee will  be saved inside user table with role code as employee
      required: true
    },
    visitPurposeId:{
      model: 'visitpurpose',
      required: true
    },
    visitingRestrictedAreas :{
      type: 'boolean', 
      defaultsTo: true
    },
    isAcceptedTermsCondition:{
      type: 'boolean', 
      defaultsTo: false
    },
    isLoggedOut:{ // on visitor signout, update this column value to true
      type: 'boolean', 
      defaultsTo: false
    }
  },

};

