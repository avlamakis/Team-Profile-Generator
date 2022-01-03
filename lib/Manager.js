//retrieves employee construct to be imported with methods with require 
const Employee = require('./Employee');

//manager constructor extends off of methods from the employee constructor including officer number
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // calling employee constructor
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }

// return methods for school input and set employee role to intern systematiaclly if chosen
    getRole () {
        return "Manager";
    }
}

//module export 
module.exports = Manager; 