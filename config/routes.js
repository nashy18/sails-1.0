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

  'GET /:model/getModelAttributes':{
    skipAssets: true,
    fn: (req, res) => {
      try {
        const modelName = req.params.model;
        const getAttributes = (model) => {
            if (sails.models[model]) {
                let attributes = Object.keys(sails.models[model].attributes);
                attributes.forEach((item) => {
                    const childAttributes = getAttributes(item);
                    if (childAttributes) {
                        attributes = _.union(attributes, childAttributes);
                    }
                });
                return attributes;
            }
            else{
                return null;
            }
        }

        const output = getAttributes(modelName);
        if(output){
          return res.send({"data" : output});
        }
        else{
          return res.send ({"data" : [], "message" : "No models found"});
        }
      } catch (error) {
        res.send(error);
      }   
    }
  },

  'GET /config': {
    skipAssets: true,
    fn: (req, res)=>{
      try {
        const request = sails.request,
          url = sails.custom_config.endpointURL + "config";
        request.get({ url: url, json: true }, (error, response, body) => {
          res.send(body);
        });

      } catch (error) {
        return res.send(error);
      }
    }
  }
};
