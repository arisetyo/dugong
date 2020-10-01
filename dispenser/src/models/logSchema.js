/**
 * schema for logs collection
 * @author Arie M. Prasetyo
 * @copyright 2020
 * @module MongoDB
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Log schema
 * Collection for user activity log
 * Fields:
 * * url
 * * user id
 * * activity
 */
const LogSchema = new Schema({
  url: String,
  userId: Number,
  activity: String,
  createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Log', LogSchema);