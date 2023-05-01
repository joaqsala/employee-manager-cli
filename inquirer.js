const inquirer = require('inquirer');



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
                        type: "input",
                        message: "Which employee's role do you want to update",
                        name: "updateRole",
                        // list: employeeList(),
                    }
                ])
        }
        // const svgContent = renderSVG(answer);
    
        })
        .catch((error) => {
            if (error) {
            console.log(error)
        }});
    }
    

    
    module.exports = { initQuery };