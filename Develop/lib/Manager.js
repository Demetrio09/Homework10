// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor(name, role, email, id, officeNumber) {
        super(name, role, email, id, officeNumber);
        this.officeNumber = officeNumber;
    }

    getRole() {
        const mgr = "Manager";
        return mgr;
    }
}

// const Manager = new Manager();

module.exports = Manager;