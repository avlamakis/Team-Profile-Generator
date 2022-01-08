//retrieves employee construct to be imported with methods with require
const Employee = require("./Employee");

// engineer constructor extends off of methods from the employee constructor 
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // calling employee constructor 
        super (name, id, email);

        this.github = github; 
    }

// return methods for github input and set employee role to engineer systematiaclly if chosen
    getGithub () {
        return this.github;
    }

    getRole () {
        return "Engineer";
    }
}

//module export 
module.exports = Engineer; 