const inquirer = require('inquirer');
const initQueries = require('./dbqueries')


const initQuestion = async () => {
    return inquirer
        .prompt([
        {
        type: 'rawlist',
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
        .then( async (answer) => {
            switch (answer.toDo) {
                case "View All Employees":
                    await initQueries.employeeList();
                    await initQuestion();
                    break;
            
                default:
                    break;
            }})

        // inquirer
        //         .prompt([
        //             {
        //                 type: "list",
        //                 message: "Which employee's role do you want to update",
        //                 name: "updateRole",
                        // choices: dbqueries.employeeList(),
        //                 dbqueries.employeeList()
        //             }
        // })
        // const svgContent = renderSVG(answer);
        .catch((error) => {
            if (error) {
            console.log(error)
        }});
    }



initQuestion();
