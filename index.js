const inquirer = require('inquirer');
const mysql = require('mysql2');
// const { config } = require('./config/connection')

const db = mysql.createConnection(
    {
    host: 'localhost',
    user: 'process.env.DB_USER',
    password: 'process.env.DB_PASSWORD',
    database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
);

const initQuery = () => {
inquirer
    .prompt([
    {
    type: 'list',
    message: 'What would you like to do?',
    choices: ["View All Employees", "Add an Employee", "Update an Employee Role", "View All Roles", "Add a Role", "View All Departments", "Add a Department"],
    name: 'toDo',
    }
    ])
    .then((answer) => {
    console.log(answer)
    // const svgContent = renderSVG(answer);

    // fs.writeFile('./examples/logo.svg', svgContent, (err) =>
    // err ? console.log(err) : console.log('Successful query')
    // );
    })
    .catch((error) => {
        if (error) {
        console.log(error)
    }});
}

initQuery();