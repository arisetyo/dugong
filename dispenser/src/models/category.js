/**
 * model-controller for Category table
 * @author Arie M. Prasetyo
 * @copyright 2020
 * @module MySQL
 */

/**
 * @TODO change the database
 */

/**
 * retrieve member entries
 * @param {*} pool 
 * @param {*} res 
 */
const retrieve = (pool, res) => {
  const query = 'select * from member';

  pool.query(query, (err,rows) => {
    if(err) throw err;
    res.json(rows);
  });
};


// export module
module.exports = {
  retrieve
};