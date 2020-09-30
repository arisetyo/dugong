/**
 * dugong-backend
 * backend REST API server of Dugong, main application file
 * @author: Arie M. Prasetyo (2020)
 */

const bodyParser = require('body-parser');
const express = require('express');
//
const Log = require('./models/log');

/**
 * Main server app
 * serves API's to interact with the database
 */
const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

/**
 * default API endpoint
 */
app.get('/', (_, res) => {
  res.json({msg: `This is API server. Format "/api/v1/<collection name>"`});
});

/**
 * A. GET all log content
 * Load all log content
 */
app.get('/api/v1/logs', async (_, res) => {
  const logs = await Log.find();
  res.json(logs);
});

/**
 * B. POST log
 * Save a log
 * 
 * @var url url
 * @var userId ID of the user
 * @var activity activity of the user
 * 
 */
app.post('/api/v1/log', async (req, res) => {
  const {url, userId, activity} = req.body;
  const log = new Log({url, userId, activity});
  const savedLog = await log.save();
  res.json(savedLog);
});


// = = = = = export app = = = = = //
module.exports = app;


/** 
 * 
 * example of MySQL connection using Node JS
 * 
 * */

const mysql = require('mysql');

const con_mysql = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'm4c4d4m14',
  database: 'database_for_tests'
});

con_mysql.connect( err => {
  if (err) throw err;
  console.log('Connected!');
});

const q = 'select * from member';

con_mysql.query( q, (err,rows) => {
  if(err) throw err;

  console.log('Data received from Db:');
  
  rows.map( obj => {
    console.log(`id ${obj.id}`);
    console.log(`name ${obj.firstname} ${obj.lastname}`);
  });
});

con_mysql.end( err => {
  // The connection is terminated gracefully
  // Ensures all remaining queries are executed
  // Then sends a quit packet to the MySQL server.
});