const mysql = require('mysql2');
const config = require('./config/connection')


const db = mysql.createConnection(config);

db.connect((error) => {
    if (error) throw error; 
    console.log("Connected to database."
    )})


const initQueries = {
    //Select all employees
    employeeList: async () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM employee', (err, results) => {
        if (err) {
            console.log(err);
            reject(err);
        } else {
            console.table(results);
            resolve(results);
        }
        });
    });
    }
}

module.exports = initQueries;

//can also add this within the function instead:                         
// () => {
//     db.query('SELECT * FROM employee', function (err, results) {
//         console.log(results);
//     });
// },


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
