//utilizes the intern construct
const Intern = require('../lib/Intern');

//created intern object  
test('creates an Intern object', () => {
    const intern = new Intern('alex', 21, 'alexvlamakis@gmail', 'UofU');
    
    expect(intern.school) .toEqual(expect.any(String));
});

//retrieves school information from method getSchool()
test('gets employee school', () => {
    const intern = new Intern('alex', 21, 'alexvlamakis@gmail', 'UofU');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('alex', 21, 'alexvlamakis@gmail.com', 'UofU');

    expect(intern.getRole()).toEqual("Intern");
}); 