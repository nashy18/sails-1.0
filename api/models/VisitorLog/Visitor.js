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
    mobileNumber: {
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
    employeeId: {
      model: 'user', //employee will  be saved inside user table with role code as employee
      required: true
    },
    visitPurposeId: {
      model: 'visitpurpose',
      required: true
    },
    visitingRestrictedAreas: {
      type: 'boolean',
      defaultsTo: true
    },
    isAcceptedTermsCondition: {
      type: 'boolean',
      defaultsTo: false
    },
    isLoggedOut: { // on visitor signout, update this column value to true
      type: 'boolean',
      defaultsTo: false
    }
  },

  afterCreate: async (values, cb) => {
    const emailService = new (sails.providers.email)(),
      employeeInfo = await User.findOne({ "id": values.employeeId }),
      options = {
        from: '"Smart Visitor Log" <no-reply@smartfoodsafe.com>', // sender address
        to: employeeInfo.email, // list of receivers
        cc: "nashy18@gmail.com",
        subject: 'You have a Visitor !', // Subject line
        html: 'Dear Mr ' + employeeInfo.firstName + ' ' + employeeInfo.lastName + ',' +
        "</br>" + "</br>" +
        "<p>This is to notify you have a Visitor Mr " + values.firstName + " " + values.lastName + " from company name " + values.companyName + " is waiting for you to be received at reception. </p>" +
        "</br>" + "</br>" +
        "Yours Sincerely," +
        "</br>" + "</br>" +
        "<p>Smart Visitor Log</p>"
      };
    emailService.send(options, (error, result) => {
      if (error) {
        return console.log(error);
      }
      return console.log(result);
    });
    return cb();
  }

};

