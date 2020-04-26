// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHub, role = "Engineer") {

        super(name, id, email, role)

        this.gitHub = gitHub;
    }

    getGithub = () => this.gitHub;
}

module.exports = Engineer;