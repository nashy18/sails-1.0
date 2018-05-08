/**
 * Module dependencies
 */
const util = require('util'),
  actionUtil = require('../../node_modules/sails/lib/hooks/blueprints/actionUtil');

/**
 * Create Records
 */

module.exports = function createRecord(req, res) {
    res.send({"message":"create"});
};
