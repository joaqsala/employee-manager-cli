const inquirer = require('inquirer');
const mysql = require('mysql2');
const { config } = require('./config/connection')

// const db = mysql.createConnection(
//     {
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'employee_db'
//     },
//     console.log(`Connected to the employee_db database.`)
// );


// db.connect((error)=>{if (error) throw error; console.log("Connected to database.")})

//Select all employees
const employeeList = () => {
    db.query('SELECT first_name, last_name FROM employees', function (err, results) {
        console.log(results);
    });
}

const departmentList = () => {
    db.query('SELECT * FROM department', function (err, results) {
        console.log(results);
    });
}

const roleList = () => {
    db.query('SELECT * FROM role', function (err, results) {
        console.log(results);
    });
}

const initQuery = () => {
return inquirer
    .prompt([
    {
    type: 'list',
    message: 'What would you like to do?',
    choices: ["View All Employees", "Add an Employee", "Update an Employee Role", "View All Roles", "Add a Role", "View All Departments", "Add a Department"],
    name: 'toDo',
    },
    {
    type: "input",
    message: "What department would you like to add?",
    name: "addDept",
    when: (answer) => answer.toDo === "Add a Department",
    },
    {
    type: "input",
    message: "What role would you like to add?",
    name: "addRole",
    when: (answer) => answer.toDo === "Add a Role",
    },
    {
    type: "number",
    message: "What is the salary for this new role?",
    name: "addSalary",
    when: (answer) => answer.toDo === "Add a Role",
    },
    {
    type: "input",
    message: "Enter the first name of the new employee.",
    name: "firstName",
    when: (answer) => answer.toDo === "Add an Employee",
    },
    {
    type: "input",
    message: "Enter the last name of the new employee.",
    name: "lastName",
    when: (answer) => answer.toDo === "Add an Employee",
    },
    {
    type: "input",
    message: "What is the new employee's role?",
    name: "newEmployeeRole",
    when: (answer) => answer.toDo === "Add an Employee",
    },
    {
    type: "input",
    message: "Who is the new employee's manager?",
    name: "newEmployeeRole",
    when: (answer) => answer.toDo === "Add an Employee",
    },
    ])
    .then((answer) => {
    if (answer.choices === "Update an Employee"){
        inquirer
            .prompt([
                {
                    type: "list",
                    message: "Which employee's role do you want to update",
                    name: "updateRole",
                    list: employeeList(),
                }
            ])
    }
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