// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email, role = "Employee") {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    getName = () => this.name;

    getId = () => this.id;
    
    getEmail = () => this.email;

    getRole = () => this.role;
    

}

console.log(this.role);
module.exports = Employee;