/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'pages/homepage'
  },

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/
  'POST /:model/paginate': {
    skipAssets: true,
    fn: (req, res) => {
      return require('../api/blueprints/paginate.js')(req, res);
    }
  },

  'POST /:model/search': {
    skipAssets: true,
    fn: (req, res) => {
      return require('../api/blueprints/find.js')(req, res);
    }
  },

  'GET /config': {
    skipAssets: true,
    fn: (req, res)=>{
      try {
        const request = sails.request,
          url = "http://18.191.2.115:3000/config";
        request.get({ url: url, json: true }, (error, response, body) => {
          res.send(body);
        });

      } catch (error) {
        return res.send(error);
      }
    }
  },

  'POST /user/login': {
    skipAssets: true,
    fn: (req, res)=>{
      try {
        const request = sails.request,
          url = "http://18.191.2.115:3000/user/login";
        request.post({body: {username: "admin", password: "admin"}, url: url, json: true }, (error, response, body) => {
          res.send(body);
        });

      } catch (error) {
        return res.send(error);
      }
    }
  }
};
