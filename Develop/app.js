const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employee = [];

const nextMember = {
    type: "list",
    message: "What type of team member would you like to add?",
    choices: ["Engineer", "Intern", "I don't want to add any more team members"],
    name: "role"
};

const mgrQuestion = [
    {
        type: "input",
        message: "What is your manager's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is your manager's id?",
        name: "id"
    },
    {
        type: "input",
        message: "What is your manager's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your manager's office number?",
        name: "officeNumber"
    }
];

const engQuestions = [
    {
        type: "input",
        message: "What is the engineer's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the engineer's id?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the engineer's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the github engineer's username?",
        name: "github"
    }
];

const intQuestions = [
    {
        type: "input",
        message: "What is the intern's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the intern's id?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the intern's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the intern's school?",
        name: "school"
    }
];

const Employee = require("./lib/Employee.js");

function init() {
    console.log(`Please build your team`)
    return inquirer.prompt(mgrQuestion)
        .then(function (res) {
            let manager = new Manager(
                res.name,
                // res.role,
                res.id,
                res.email,
                res.officeNumber
            );
            employee.push(manager);
            console.log(employee);
            addEmployee();
        });
};

function addEmployee() {
    console.log(`------------------------`);
    return inquirer.prompt(nextMember)
        .then(function (res) {
            switch (res.role) {
                case "Engineer":
                    getEngInfo();
                    break;
                case "Intern":
                    getIntInfo();
                    break;
                default:
                    fs.writeFile(outputPath, render(employee), function (err) {

                        if (err) {
                            return console.log(err);
                        }

                        console.log("Success!");

                    })
            };
        });
};

function getEngInfo() {
    return inquirer.prompt(engQuestions)
        .then(function (res) {
            let engineer = new Engineer(
                res.name,
                res.id,
                res.email,
                res.github
            );
            employee.push(engineer);
            console.log(employee);
            addEmployee();
        });
};

function getIntInfo() {
    return inquirer.prompt(intQuestions)
        .then(function (res) {
            let intern = new Intern(
                res.name,
                res.id,
                res.id,
                res.school
            );
            employee.push(intern);
            console.log(employee);
            addEmployee();
        });
};


init();


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
