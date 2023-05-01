const mysql = require('mysql2');
const config = require('./config/connection')
// const { initQuery } = require('./inquirer');


const db = mysql.createConnection(config);

db.connect((error) => {
    if (error) throw error; 
    console.log("Connected to database.")})


    module.exports = db;