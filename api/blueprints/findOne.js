/**
 * Module dependencies
 */
const util = require('util'),
    actionUtil = require('../../node_modules/sails/lib/hooks/blueprints/actionUtil');

/**
 * Find One Record
 * Get Single Record By ID
 * Search Single Record by Parameters
 */


const findOneRecord = async (req, res) => {
    try {
        const modelInstance = actionUtil.parseModel(req),
            modelName = req.options.model,
            requestData = (req.params),
            getSingleRecord = await modelInstance.findOne(requestData);

        if (_.isEmpty(getSingleRecord)) return res.ok({ message: modelName + "  details not found", data: null, success: false });

        return res.ok({ message: sails.__('API_Read_Single', modelName), data: getSingleRecord, success: true });

    } catch (error) {
        return res.serverError({ message: error.message, success: false });
    }
}

module.exports = findOneRecord;