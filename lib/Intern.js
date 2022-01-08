//retrieves employee construct to be imported with methods with require
const Employee = require('./Employee');

//engineer constructor extends off of methods from the employee constructor including school
class Intern extends Employee  {
    constructor (name, id, email, school) {
        // calling employee constructor
        super (name, id, email); 

        this.school = school; 
    }

// return methods for school input and set employee role to intern systematiaclly if chosen
    getSchool () {
        return this.school;
    }

    getRole () {
        return "Intern";
    }
}

//module export 
module.exports = Intern; 