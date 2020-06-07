// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor(name, role, email, id, officeNumber) {
        if (!name) {
            throw new Error("You are missing the name.");
        }
        if (!role) {
            throw new Error("You are missing the role.");
        }
        if (!email) {
            throw new Error("You are missing the email.");
        }
        if (!id) {
            throw new Error("You are missing the id.");
        }
        if (!officeNumber) {
            throw new Error("You are missing the office number.");
        }


        super(name, role, email, id, officeNumber);

    }

    getRole() {
        const mgr = "Manager";
        return mgr;
    }
}

const Manager = new Manager();

module.exports = Manager;