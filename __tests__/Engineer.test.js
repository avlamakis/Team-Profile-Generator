//utilizes the engineer construct
const Engineer = require('../lib/Engineer');

//created an engineer object  
test('creates an Engineer object', () => {
    const engineer = new Engineer('Alex', 21, 'Alexvlamakis@gmail', 'avlamakis');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// gets github from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('Alex', 21, 'Alexvlamakis@gmail', 'avlamakis');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role from getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer('Alex', 21, 'Alexvlamakis@gmail', 'avlamakis');

    expect(engineer.getRole()).toEqual("Engineer");
});