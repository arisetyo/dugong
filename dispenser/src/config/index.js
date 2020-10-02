/**
 * dugong-backend
 * mongodb configs
 * @author Arie M. Prasetyo (2020)
 */

// MongoDB configuration
let MONGO_DB_URI = "mongodb://localhost:27017/dugong_logs";
MONGO_DB_URI = process.env.MONGO_DB_URI ? process.env.MONGO_DB_URI : MONGO_DB_URI;

const MONGO_DB_CONF = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

/**
 * @TODO change the database
 */
// MySQL configuration
const MYSQL_CONF = {
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: process.env.MYSQL_PWD ? process.env.MYSQL_PWD : 'password',
  database: 'dugong_sample',
  connectionLimit : 400
};

module.exports = {
  MONGO_DB_URI,
  MONGO_DB_CONF,
  MYSQL_CONF
};