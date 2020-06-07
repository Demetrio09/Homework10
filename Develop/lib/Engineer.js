// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(name, role, email, id, github) {
        if (!name) {
            throw new Error("You are missing the name.");
        }
        if(!role) {
            throw new Error("You are missing the role.");
        }
        if(!email) {
            throw new Error("You are missing the email.");
        }
        if(!id) {
            throw new Error("You are missing the id.");
        }
        if(!github) {
            throw new Error("You are missing the github user name.");
        }
        super(name, role, email, id, github);
    }
}

const Engineer = new Engineer();

module.exports = Engineer;