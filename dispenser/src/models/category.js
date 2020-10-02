/**
 * model-controller for Category table
 * @author Arie M. Prasetyo
 * @copyright 2020
 * @module MySQL
 */

/**
 * @TODO 
 * - change the database
 * - create a schema for this model, eg. table name, fields
 */

/**
 * retrieve member entries
 * @param {*} pool 
 * @param {*} res 
 */
const retrieve = (pool, res) => {
  const query = 'select * from member';
  // const query = `select ${CategorySchema.props.join(', ')} from ${CategorySchema.table}`;

  pool.query(query, (err,rows) => {
    if(err) throw err;
    res.json(rows);
  });
};


// export module
module.exports = {
  retrieve
};