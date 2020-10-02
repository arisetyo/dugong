/**
 * schema for category table
 * @author Arie M. Prasetyo
 * @copyright 2020
 */

/**
 * name of this schema
 */
const _schemaName = 'category';

/**
 * properties of this schema
 */
const _schemaProperties = [
  {name: 'id', type: 'int', format: 'int64'},
  {name: 'name', type: 'string', required: true}
];

/**
 * create SQL
 */
const _createSQL = 
"CREATE TABLE `category` (" +
  "`id` INT NOT NULL AUTO_INCREMENT," +
  "`name` TINYTEXT NOT NULL," +
  "PRIMARY KEY (`id`)" + 
")";

/**
 * public method
 * return schema name
 */
const getSchemaName = () => (_schemaName);

/**
 * public method
 * return schema's field names
 */
const getSchemaFieldNames = (doJoin, includePK = true) => {
  let ret = _schemaProperties.map(p => p.name);

  // remove first prop (PK)
  if (!includePK) ret.shift();

  // join the properties as a string
  ret = !doJoin ? ret : ret.join(', ')

  return ret;
};

// export schema
module.exports = {
  getSchemaName,
  getSchemaFieldNames
};