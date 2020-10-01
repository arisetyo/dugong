/**
 * schema for category collection
 * @author Arie M. Prasetyo
 * @copyright 2020
 * @module MySQL
 */

/**
 * retrieve member entries
 */
const retrieve = async (pool, res) => {
  const query = 'select * from member';

  pool.query(query, (err,rows) => {
    if(err) throw err;
    res.json(rows);
  });
};


// export controller module
module.exports = {
  retrieve
};