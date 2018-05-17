/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
class UserController {
    constructor(req, res) {
        this.req = req;
        this.res = res;
    }

    authenticate(args) {
        try {
            const request = sails.request,
              url = sails.custom_config.endpointURL + "user/login";
            request.post({body: args, url: url, json: true }, (error, response, body) => {
              this.res.send(body);
            });
    
          } catch (error) {
            return this.res.send(error);
          }
    }
}

module.exports = {
	login: (req,res)=>{
        try {
            const userController = new UserController(req, res);
            const reqData = {username: "admin", password: "admin"};
            return userController.authenticate(reqData);    
          } catch (error) {
            return res.send(error);
          }
    }
};

