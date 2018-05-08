/**
 * Module dependencies
 */
const util = require('util'),
  actionUtil = require('../../node_modules/sails/lib/hooks/blueprints/actionUtil');

/**
 * Destroy one Record
 */

module.exports = function destroyOneRecord(req, res) {
    res.send({"message":"delete"});
};
