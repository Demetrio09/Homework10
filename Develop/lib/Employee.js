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
        // return inquirer
        //     .prompt([
        //         {
        //             type: "input",
        //             message: "What is your name?",
        //             name: "name"
        //         }
        //     ]).then(function(name) {
        //         console.log(name)
        //     });
    }

    getId() {
        // return inquirer
        //     .prompt([
        //         {
        //             type: "input",
        //             message: "What is your id?",
        //             name: "id"
        //         }
        //     ]).then(function(id) {
        //         console.log(id)
        //     });
    }

    gwtEmail() {
        // return inquirer
        //     .prompt([
        //         {
        //             type: "input",
        //             message: "What is your email?",
        //             name: "email"
        //         }
        //     ]).then(function(email) {
        //         console.log(email)
        //     });
    }

    getRole() {
        const ee = "Employee";
        return ee;
    }
}

module.exports = Employee;