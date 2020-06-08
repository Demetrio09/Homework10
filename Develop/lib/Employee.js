// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer");

class Employee {
    constructor(name, role, email, id) {
        this.name = name;
        this.role = role;
        this.email = email;
        this.id = id;
    }

    getName() {
        return inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is your name?",
                    name: "name"
                }
            ]);
    }

    getId() {
        return inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is your id?",
                    name: "id"
                }
            ])
    }

    getEmail() {
        return inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is your email?",
                    name: "email"
                }
            ])
    }

    getRole() {
        const ee = "Employee";
        return ee;
    }
}
// Employee.getName();
module.exports = Employee;