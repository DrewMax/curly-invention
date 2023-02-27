const Engineer = require("../lib/Engineer");

const testObject = {name: "Drew", id: 2233, email: "djmx@maxx.com", github: "DrewMax"}

test("checks for required Engineer properties", () => {
    const engineer = new Engineer(testObject);
    expect(engineer.name).toEqual(expect.any(String));
    console.log(`(testObject) name : ${engineer.name}`)
    expect(engineer.id).toEqual(expect.any(Number));
    console.log(`(testObject) ID : ${engineer.id}`)
    expect(engineer.email).toEqual(expect.any(String));
    console.log(`Engineer Email : ${engineer.email}`);
});

test("Gets Engingeers name", () => {
    const engineer = new Engineer(testObject)
    expect(engineer.getName().toEqual(expect.any(String)))
    console.log(`Engineer getName() : ${engineer.getName()}`)
})

test("Gets Engingeers id", () => {
    const engineer = new Engineer(testObject)
    expect(engineer.getId().toEqual(expect.any(String)))
    console.log(`Engineer getId() : ${engineer.getId()}`)
});

test("Gets Engingeers email", () => {
    const engineer = new Engineer(testObject)
    expect(engineer.getEmail().toEqual(expect.any(String)))
    console.log(`Engineer getEmail() : ${engineer.getEmail()}`)
});

test("Gets Engingeers role", () => {
    const engineer = new Engineer(testObject)
    expect(engineer.getRole().toBe("Engineer"))
    console.log(`Engineer getRole() : ${engineer.getRole()}`)
})

