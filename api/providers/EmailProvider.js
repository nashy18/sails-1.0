'use strict';
const nodemailer = require('nodemailer'),
      mg = require('nodemailer-mailgun-transport'),
      hbs = require('nodemailer-express-handlebars');

class EmailProvider {
  constructor(config){
    this.config = config || sails.appConfig.email.mailgun;
  }

  send(input, callback){    
        const auth = { auth: { api_key: this.config.apiKey, domain: this.config.domain}},
              transporter = nodemailer.createTransport(mg(auth));
        
        // transporter.use('compile', hbs(
        //   {
        //     extname: '.hbs',
        //     layoutsDir : __dirname  + "/config/mail-templates/visitor-log",
        //   }
        // ));
        // send mail with defined transport object
        transporter.sendMail(input, (error, info) => {
            transporter.close();
            if (error) {
                //return console.log(error);
                return callback(error, null);
            }
            return callback(null, info);
        });
  }
}

module.exports = EmailProvider;