/**
 * Module dependencies
 */
const util = require('util'),
    actionUtil = require('../../node_modules/sails/lib/hooks/blueprints/actionUtil');


/**
 * Find all Records based on search parameters
 * Get ALL
 * Search by Parameters
 */

const findRecords = async (req, res) => {
    try {
        let modelInstance, modelName;
        //when call comes from search api request
        if (req.params.model) {
            modelInstance = sails.models[req.params.model];
            modelName = req.params.model;
            if (_.isEmpty(modelInstance)) return res.status(404).serverError({ message: modelName + " model not defined", success: false });
        }
        //when call comes from get all api request
        else{
            modelInstance = actionUtil.parseModel(req);
            modelName = req.options.model;
        }
        const requestData = (req.body || req.params || {}),
            getRecords = await modelInstance.find(requestData);

        if (_.isEmpty(getRecords)) return res.ok({ message: modelName + "  records not found", data: null, success: false });

        return res.ok({ message: modelName + " records retrieved successfully", data: getRecords, success: true });

    } catch (error) {
        return res.serverError({ message: error.message, success: false });
    }
};

module.exports = findRecords;