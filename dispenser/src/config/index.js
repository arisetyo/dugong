/**
 * dugong-backend
 * mongodb configs
 * @author: Arie M. Prasetyo (2020)
 */

// MongoDB configuration
let MONGO_DB_URI = "mongodb://localhost:27017/dugong_logs";
MONGO_DB_URI = process.env.MONGO_DB_URI ? process.env.MONGO_DB_URI : MONGO_DB_URI;

const MONGO_DB_CONF = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

// MySQL configuration
const MYSQL_CONF = {
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'm4c4d4m14',
  database: 'database_for_tests',
  connectionLimit : 10,
};

module.exports = {
  MONGO_DB_URI,
  MONGO_DB_CONF,
  MYSQL_CONF
};