const mysql = require('mysql2');
const config = require('./config/connection')
const cTable = require('console.table');

const db = mysql.createConnection(config);

db.connect((error) => {
    if (error) throw error; 
    console.log("Connected to database."
    )})


const initQueries = {
    //Select all employees
    employeeList: async () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT e.id, e.first_name, e.last_name, r.title, d.name, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager FROM employee e LEFT JOIN role r ON e.role_id = r.id INNER JOIN department d ON r.department_id = d.id LEFT JOIN employee m ON e.manager_id = m.id`, (err, results) => {
        if (err) {
            console.log(err);
            reject(err);
        } else {
            console.table(results);
            resolve(results);
        }
        });
    });
    },
    departmentList: async () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM department', (err, results) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                console.log(typeof results);
                console.table(results);
                resolve(results);
            }
            });
        });
        },
    deptListOf: async () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM department', (err, results) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve(results);
            }
            });
        });
        },
    roleList: async () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT r.id, r.title, d.name AS department, r.salary FROM role r LEFT JOIN department d ON r.department_id = d.id;', (err, results) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                console.table(results);
                resolve(results);
            }
            });
        });
        },
    addDepartment: async (dept) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO department (name) VALUES (?)', [dept], (err, results) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                console.log(`Added ${dept} to the database`);
                resolve(results);
            }
            });
        });
        },
        addRole: async (newRole, newSalary, intoDepartment) => {
            return new Promise((resolve, reject) => {
                db.query(`INSERT INTO role (title, salary, department_id) VALUES ("${newRole}", ${newSalary}, ${intoDepartment})`, (err, results) => {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    console.log(`Added ${newRole} to the database`);
                    resolve(results);
                }
                });
            });
            },
        
// To delete multiple options, set up a variable: idsToDelete = [3,5,6];

// db.query(`DELETE FROM course_names WHERE id IN = (?)`, [idsToDelete], (err, result) => {
// it's an array inside an array [[3,5,6]] <- can be used for updating multiple rows as well
    // addEmployee: async (firstName, lastName, role, manager) => {
    //     return new Promise((resolve, reject) => {
    //         const newEmployeeInfo = [firstName, lastName, role, manager]
    //         db.query(`INSERT INTO employee (firstName, lastName, role, manager) VALUES ('${dept}')`, (err, results) => {
    //         if (err) {
    //             console.log(err);
    //             reject(err);
    //         } else {
    //             console.log(`Added ${dept} to the database`);
    //             resolve(results);
    //         }
    //         });
    //     });
    //     },
}

module.exports = initQueries;

