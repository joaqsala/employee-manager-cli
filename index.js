const inquirer = require('inquirer');
const initQueries = require('./dbqueries')


const initQuestion = async () => {
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
        message: "What is the name of the role?",
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
        ])
        .then( async (answer) => {
            switch (answer.toDo) {
                case "View All Employees":
                    await initQueries.employeeList();
                    await initQuestion();
                    break;
                case "View All Departments":
                    await initQueries.departmentList();
                    await initQuestion();
                    break;
                case "View All Roles":
                    await initQueries.roleList();
                    await initQuestion();
                    break;
                case "Add Department":
                    await initQueries.addDepartment(answer.addDept);
                    await initQuestion();
                    break;  
                case "Add Role":
                    inquirer
                    .prompt([
                    {
                        type: "list",
                        message: "Which department does the role belong to?",
                        name: "newRoleDept",
                        choices: (await initQueries.listOfDept()).map((dept) => ({
                            name: dept.name,
                            value: dept.id
                        })),
                    },
                    ])
                    .then( async (response) => {
                        // console.log(response)
                        await initQueries.addRole(answer.addRole, answer.addSalary, response.newRoleDept)
                        await initQuestion();
                    })
                    .catch((err) => {
                        if (error) {
                        console.log(err)
                    }});
                    break; 
                case "Add Employee":
                    inquirer
                    .prompt([
                    {
                        type: "list",
                        message: "What is the new employee's role?",
                        name: "newRoleEmployee",
                        choices: (await initQueries.listOfRoles()).map((role) => ({
                            name: role.title,
                            value: role.id
                        })),
                    },
                    {
                        type: "list",
                        message: "Who is the new employee's manager?",
                        name: "newEmployeeManager",
                        choices: (await initQueries.listOfEmployees()).map((employee) => ({
                            name: employee.name,
                            value: employee.id
                        })),
                    },
                    ])
                    .then( async (response) => {
                        // console.log(response)
                        await initQueries.addEmployee(answer.firstName, answer.lastName, response.newRoleEmployee, response.newEmployeeManager)
                        await initQuestion();
                    })
                    .catch((err) => {
                        if (error) {
                        console.log(err)
                    }});
                    break;    
                case "Update Employee Role":
                    inquirer
                    .prompt([
                    {
                        type: "list",
                        message: "Which employee's role do you want to update?",
                        name: "updateEmployee",
                        choices: (await initQueries.listOfEmployees()).map((employee) => ({
                            name: employee.name,
                            value: employee.id
                        })),
                    },
                    {
                        type: "list",
                        message: "Which role do you want to assign the selected employee?",
                        name: "updateRole",
                        choices: (await initQueries.listOfRoles()).map((role) => ({
                            name: role.title,
                            value: role.id
                        })),
                    },
                    ])
                    .then( async (response) => {
                        // console.log(response)
                        await initQueries.updateEmpRole(response.updateEmployee, response.updateRole)
                        await initQuestion();
                    })
                    .catch((err) => {
                        if (error) {
                        console.log(err)
                    }});
                    break;                
                default:
                    break;
            }})
        .catch((error) => {
            if (error) {
            console.log(error)
        }});
    }



initQuestion();


                // await ((newEmployeeRole)=>{
                    //     console.log(newEmployeeRole)})
                    // await initQueries.addRole(answer.addRole, answer.addRole,);
                    // await initQuestion();