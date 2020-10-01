/**
 * dugong-backend
 * main access for backend server
 * @author Arie M. Prasetyo (2020)
 */

const mongoose = require('mongoose');

// main application
const app = require('./src/app');

// backend port
const port = 3000;

// database connection configuration
const {MONGO_DB_URI, MONGO_DB_CONF} = require('./src/config');

// connect mongodb
mongoose.connect(MONGO_DB_URI, MONGO_DB_CONF, err => {
  if (err) console.error(err);
  else console.log('Connected to MongoDB');
});

// Start the API server app
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
