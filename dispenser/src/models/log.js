/**
 * model-controller for Log collection
 * @author Arie M. Prasetyo (2020)
 * @module MongoDB
 */

const Log = require('./logSchema');

/**
 * create a new log entry
 * @param {*} url url
 * @param {*} userId ID of the user
 * @param {*} activity activity of the user
 * @param {*} res Express respond object
 */
const create = async ({url, userId, activity}, res) => {
  const log = new Log({url, userId, activity});
  res.json(await log.save());
};


/**
 * retrieve log entries
 * @param {*} res Express respond object
 */
const retrieve = async res => {
  res.json(await Log.find());
};


// export module
module.exports = {
  create,
  retrieve
};