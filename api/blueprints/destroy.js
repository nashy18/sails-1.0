/**
 * Module dependencies
 */
const util = require('util'),
  actionUtil = require('../../node_modules/sails/lib/hooks/blueprints/actionUtil');

/**
 * Destroy one Record
 */

const destroyOneRecord = async (req, res)=> {
  try {
    const modelInstance = actionUtil.parseModel(req);
    //if(_.isEmpty(modelInstance)) return res.status(404).serverError({message : "Model not defined", success:false});
    
    const modelName = req.options.model,
          deletedUser = await modelInstance.destroy(req.params)
                              .fetch();

    return res.ok({message:"A " + modelName + " data deleted successfully", data: deletedUser, success:true});
  } catch (error) {
    return res.serverError({message : error.message, success:false});
  }
};

module.exports = destroyOneRecord;
