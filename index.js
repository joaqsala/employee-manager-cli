const inquirer = require('inquirer');


const initQuery = () => {
inquirer
    .prompt([
    {
    type: 'list',
    message: 'What would you like to do?',
    choices: ["View All Employees", "Add an Employee", "Update an Employee Role", "View All Roles", "Add a Role", "View All Departments", "Add a Department"],
    name: 'toDo',
    }
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
    }})
])
}

initQuery();