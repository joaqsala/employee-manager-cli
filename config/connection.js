require('dotenv').config();

const config = {
    host: 'localhost',
  // MySQL username,
    user: process.env.DB_USER,
  // MySQL password
    password: process.env.DB_PASSWORD,
    database: 'employee_db',

}

module.exports = config;