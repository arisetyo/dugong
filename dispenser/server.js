/**
 * dugong-backend
 * main access for backend server
 * @author: Arie M. Prasetyo (2020)
 */

const mongoose = require('mongoose');
const app = require('./src/app');

// backend port
const port = 3000;

// initiate mongodb connection
const {DB_URI} = require('./src/config');
mongoose.connect(DB_URI);

// Start the API server app
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
