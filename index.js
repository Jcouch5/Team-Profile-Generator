const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Template = require('./src/Template');
const inquirer = require('inquirer')
const fs = require('fs');
const employees = [];

const addManager = () => {
     inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `What is the Manager's name?`
        },
        {
            type: 'input',
            name: 'Id',
            message: `What is the Manager's Employee ID?`
        },
        {
            type: 'input',
            name: 'email',
            message: `What is the Manager's email?`
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: `What is the Manager's Office Phone Number?`
        }
    ]).then(res, (res) => {
        const {name, id, email, officeNumber} = res;
        const newManager = new Manager(name, id, email, officeNumber);
        employees.push(newManager);
    })
}
const addEngineer = () => {
     inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `What is the Engineer's name?`
        },
        {
            type: 'input',
            name: 'Id',
            message: `What is the Engineer's Employee ID?`
        },
        {
            type: 'input',
            name: 'email',
            message: `What is the Engineer's email?`
        },
        {
            type: 'input',
            name: 'gitHub',
            message: `What is the Engineer's GitHub?`
        }
    ]).then(res, (res) => {
        const {name, id, email, gitHub} = res;
        const newEngineer = new Engineer(name, id, email, gitHub);
        employees.push(newEngineer);
    })
}
const addIntern = () => {
     inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `What is the Intern's name?`
        },
        {
            type: 'input',
            name: 'Id',
            message: `What is the Interns's Employee ID?`
        },
        {
            type: 'input',
            name: 'email',
            message: `What is the Interns's email?`
        },
        {
            type: 'input',
            name: 'school',
            message: `What is the Intern's School?`
        }
    ]).then(res, (res) => {
        const {name, id, email, school} = res;
        const newIntern = new Intern(name, id, email, school);
        employees.push(newIntern);
    })
}
const addEmployee = () => {
     inquirer.prompt([
        {
            type: 'confirm',
            name: 'addEmployee',
            message: `Would like to add another employee?`
        }
    ]).then(res, (res) => {
        if (res.addEmployee) {
             inquirer.prompt([
                {
                    type: 'list',
                    name: 'EmployeeType',
                    choices: ['Engineer', 'Intern']
                }
            ]).then(res, (res) => {
                if(res.EmployeeType === 'Engineer'){
                    addEngineer();
                    addEmployee();
                } else {
                    addIntern();
                    addEmployee();
                }
            })
        } else {
            process.exit;
        }
    })
}
const init = () => {
    addManager()
        .then(
            addEmployee()
                .then(() => {
                    fs.appendFile('./dist/index.html', Template.generateTemplate(employees))
                })
        )
}
init();