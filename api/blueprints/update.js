/**
 * Module dependencies
 */
const util = require('util'),
  actionUtil = require('../../node_modules/sails/lib/hooks/blueprints/actionUtil');

/**
 * Update one Record
 */

const updateOneRecord = async (req, res) => {
  try {
    const modelInstance = actionUtil.parseModel(req),
      modelName = req.options.model,
      updatedData = await modelInstance.update(req.params, req.body)
        .set(req.body)
        .fetch();
    if (_.isEmpty(updatedData)) return res.serverError({ message: modelName + " with Id=" + req.params.id + " not exists", success: false });

    return res.ok({ message: modelName + " with Id=" + req.params.id + " updated successfully", data: updatedData, success: true });
  } catch (error) {
    return res.serverError({ message: error.message, success: false });
  }
};
module.exports = updateOneRecord;