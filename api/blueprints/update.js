/**
 * Module dependencies
 */
const util = require('util'),
  actionUtil = require('../../node_modules/sails/lib/hooks/blueprints/actionUtil');

/**
 * Update one Record
 */

 const updateOneRecord= async (req, res)=> {
  try {
    const modelInstance = actionUtil.parseModel(req);
    //if(_.isEmpty(modelInstance)) return res.status(404).serverError({message : "Model not defined", success:false});
    
    const modelName = req.options.model,
          updatedUser = await modelInstance.update(req.params, req.body)
                              .set(req.body)
                              .fetch();

    return res.ok({message:"A " + modelName + " data updated successfully", data: updatedUser, success:true});
  } catch (error) {
    return res.serverError({message : error.message, success:false});
  }
};
module.exports = updateOneRecord;