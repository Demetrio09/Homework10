// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, role, email, id, officeNumber, github, school) {
        this.name = name;
        this.role = role;
        this.email = email;
        this.id = id;
        this.officeNumber = officeNumber;
        this.github = github;
        this.school = school;
    }
}

module.exports = Employee;