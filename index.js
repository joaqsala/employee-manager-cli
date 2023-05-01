const mysql = require('mysql2');
const { config } = require('./config/connection')
const { initQuery } = require('./inquirer');


const db = mysql.createConnection(config);

db.connect((error) => {
    if (error) throw error; 
    console.log("Connected to database.")})



// //Select all employees
// const employeeList = () => {
//     db.query('SELECT first_name, last_name FROM employees', function (err, results) {
//         console.log(results);
//     });
// }

// const departmentList = () => {
//     db.query('SELECT * FROM department', function (err, results) {
//         console.log(results);
//     });
// }

// const roleList = () => {
//     db.query('SELECT * FROM role', function (err, results) {
//         console.log(results);
//     });
// }

initQuery();