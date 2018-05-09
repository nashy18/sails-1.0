/**
 * Module dependencies
 */
const util = require('util'),
  actionUtil = require('../../node_modules/sails/lib/hooks/blueprints/actionUtil');

/**
 * Create Records
 */

const createRecord= async (req, res)=> {
    try {
      const modelInstance = actionUtil.parseModel(req);
      //if(_.isEmpty(modelInstance)) return res.status(404).serverError({message : "Model not defined", success:false});
      
      const modelName = req.options.model,
            createdUser = await modelInstance.create(req.body).fetch();
      return res.ok({message:"A new " + modelName + " data created successfully", data: createdUser, success:true});
    } catch (error) {
      return res.serverError({message : error.message, success:false});
    }
};

module.exports = createRecord;