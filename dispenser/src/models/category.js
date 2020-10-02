/**
 * model-controller for Category table
 * @author Arie M. Prasetyo
 * @copyright 2020
 * @module MySQL
 */

const {getSchemaName, getSchemaFieldNames} = require('./categorySchema');

/**
 * create a new category entry
 * @param {*} name name of the category
 * @param {*} pool mysql pooled connection
 * @param {*} res Express respond object
 */
const create = async ({name}, pool, res) => {
  const query = `INSERT INTO ${getSchemaName()} (${getSchemaFieldNames(true, false)}) VALUES ('${name}')`;

  pool.query(query, (err, rst) => {
    if (err) throw err;

    res.json({status: 'success', affectedRows: rst.affectedRows});
  });
};

/**
 * retrieve member entries
 * @param {*} pool 
 * @param {*} res 
 */
const retrieve = (pool, res) => {
  const query = `SELECT ${getSchemaFieldNames(true)} FROM ${getSchemaName()}`;

  pool.query(query, (err, rows) => {
    if (err) throw err;

    res.json(rows);
  });
};


// export module
module.exports = {
  create,
  retrieve
};