const inquirer = require('inquirer');
const db = require('./dbqueries')


//Select all employees
const employeeList = () => {
    db.query('SELECT * FROM employees', function (err, results) {
        console.log(results);
    });
}

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



const initQuery = () => {
    return inquirer
        .prompt([
        {
        type: 'list',
        message: 'What would you like to do?',
        choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department"],
        name: 'toDo',
        },
        {
        type: "input",
        message: "What department would you like to add?",
        name: "addDept",
        when: (answer) => answer.toDo === "Add Department",
        },
        {
        type: "input",
        message: "What role would you like to add?",
        name: "addRole",
        when: (answer) => answer.toDo === "Add Role",
        },
        {
        type: "number",
        message: "What is the salary for this new role?",
        name: "addSalary",
        when: (answer) => answer.toDo === "Add Role",
        },
        {
        type: "input",
        message: "Enter the first name of the new employee.",
        name: "firstName",
        when: (answer) => answer.toDo === "Add Employee",
        },
        {
        type: "input",
        message: "Enter the last name of the new employee.",
        name: "lastName",
        when: (answer) => answer.toDo === "Add Employee",
        },
        {
        type: "input",
        message: "What is the new employee's role?",
        name: "newEmployeeRole",
        when: (answer) => answer.toDo === "Add Employee",
        },
        {
        type: "input",
        message: "Who is the new employee's manager?",
        name: "newEmployeeRole",
        when: (answer) => answer.toDo === "Add an Employee",
        },
        ])
        .then((answer) => {
        if (answer.toDo === "Update Employee Role"){
         inquirer
                .prompt([
                    {
                        type: "list",
                        message: "Which employee's role do you want to update",
                        name: "updateRole",
                        choices: () => {
                            db.query('SELECT * FROM employee', function (err, results) {
                                console.log(results);
                            });
                        },
                    }
                ]).then((answer2) => {
                    console.log(answer2)
                }
        )}
        // const svgContent = renderSVG(answer);
    
        })
        .catch((error) => {
            if (error) {
            console.log(error)
        }});
    }



initQuery();