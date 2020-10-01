/**
 * model-controller for Log collection
 * @author: Arie M. Prasetyo (2020)
 * @module MongoDB
 */

const LogModel = require('./logSchema');

/**
 * create a new log entry
 * @var url url
 * @var userId ID of the user
 * @var activity activity of the user
 * @var res Express respond object
 */
const create = async ({url, userId, activity}, res) => {
  const log = new LogModel({url, userId, activity});
  res.json(await log.save());
};


/**
 * retrieve log entries
 * @var res Express respond object
 */
const retrieve = async res => {
  res.json(await LogModel.find());
};


// export module
module.exports = {
  create,
  retrieve
};