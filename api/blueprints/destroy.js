/**
 * Module dependencies
 */
const util = require('util'),
  actionUtil = require('../../node_modules/sails/lib/hooks/blueprints/actionUtil');

/**
 * Destroy one Record
 */

const destroyOneRecord = async (req, res) => {
  try {
    const modelInstance = actionUtil.parseModel(req);
    //if(_.isEmpty(modelInstance)) return res.status(404).serverError({message : "Model not defined", success:false});

    const modelName = req.options.model,
      deletedData = await modelInstance.destroy(req.params)
        .fetch();
    if (_.isEmpty(deletedData)) return res.serverError({ message: modelName + " with Id=" + req.params.id + " not exists", success: false });

    return res.ok({ message: "A " + modelName + " data deleted successfully", data: deletedData, success: true });
  } catch (error) {
    return res.serverError({ message: error.message, success: false });
  }
};

module.exports = destroyOneRecord;
