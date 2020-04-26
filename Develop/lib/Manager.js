// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

//using extends to add on to the Employee class
class Manager extends Employee {
    constructor(name, id, officeNumber, email, role = "Manager") {
        
        //super calls the methods from the parent function. Using to call the methods also needed for manager. 
        super(name, id, email, role)
        this.officeNumber = officeNumber;
    }

    getOfficeNumber = () => this.officeNumber;

}

module.exports = Manager;