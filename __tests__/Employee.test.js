const Employee = require('../lib/Employee');

describe("Employee", () => {

    describe('intialization', () => {
        it("should return an object containing name, id, and email property along with a getName, getId, getEmail, and getRole property when defined", () => {
            const jake = new Employee('jake', 1, 'jake@gmail.com')

            expect(jake.name).toEqual('jake');
            expect(jake.id).toEqual(1);
            expect(jake.email).toEqual('jake@gmail.com');
        });
    });
    describe('getName', () => {
        it('should return the name of the employee', () => {
            const jake = new Employee('jake', 1, 'jake@gmail.com')

            expect(jake.getName).toEqual('jake');
        });
    });
    describe('getId', () => {
        it('should return the Id of the employee', () => {
            const jake = new Employee('jake', 1, 'jake@gmail.com')

            expect(jake.getId).toEqual(1);
        });
    });
    describe('getEmail', () => {
        it('should return the Email of the employee', () => {
            const jake = new Employee('jake', 1, 'jake@gmail.com')

            expect(jake.getEmail).toEqual('jake@gmail.com');
        });
    });
    describe('getRole', () => {
        it('should return the role of the employee', () => {
            const jake = new Employee('jake', 1, 'jake@gmail.com')

            expect(jake.getRole).toEqual('Employee');
        });
    });
    

});