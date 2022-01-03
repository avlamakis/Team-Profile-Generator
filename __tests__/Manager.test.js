//utilizes the manager construct
const Manager = require('../lib/Manager');

//created manager object  with officer number
test('creates an Manager object', () => {
    const manager = new Manager('alex', 21, 'alexvlamakis@gmail', 6);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('alex', 21, 'alexvlamakis@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 