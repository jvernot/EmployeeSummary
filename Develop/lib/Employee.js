// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }

    getName = () => this.name;

    getId = () => this.id;
    
    getEmail = () => this.email;

    getRole = () => this.role;
    
}

module.exports = Employee;