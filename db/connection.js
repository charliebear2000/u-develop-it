const mysql = require('mysql2');

// connect to database
const db = mysql.createConnection(
   {
      host: 'localhost',
      // your MySQL username,
      user: 'root',
      // your MySQL password
      password: 'Cloverhill2022$',
      database: 'election'
   },
   console.log('Connected to the election database.')
);


module.exports = db;