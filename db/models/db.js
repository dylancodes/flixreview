const mongoose = require('mongoose');

const DB_URL = "mongodb://admin:abc123@ds237707.mlab.com:37707/flixreview"

mongoose.connect(DB_URL, (err) => {
  if(err) {
    console.log("Database connection error: " + err)
    process.exit(0);
  };
  console.log("Database connected");
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Closing Database connection');
    process.exit(0);
  });
});
