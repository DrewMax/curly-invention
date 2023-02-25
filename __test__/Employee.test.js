const inquirer = require("inquirer")
const Employee = require("../lib/Employee");

test("checks for required Employee properties", () => {
    const employee = new Employee;
    expect(employee.name).toEqual(expect.any(String));
    console.log(`Employee name : ${employee.name}`)
    expect(employee.id).toEqual(expect.any(Number));
    console.log(`Employee ID : ${employee.id}`)
    expect(employee.email).toEqual(expect.any(String));
    console.log(`Employee Email : ${employee.email}`)
});

