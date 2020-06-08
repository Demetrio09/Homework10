// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(name, role, email, id, github) {
        super(name, role, email, id);
        this.github = github;
    }

    getGithub() {
    
    }

    getRole() {
        const eng = "Engineer";
        return eng;
    }
}


// const Engineer = new Engineer();

module.exports = Engineer;