const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe("Intialization", () =>{
        const jake = new Manager('jake', 1, 'jake@gamil.com', 6789998212);

        expect(jake.name).toEqual('jake');
        expect(jake.id).toEqual(1);
        expect(jake.email).toEqual('jake@gmail.com');
        expect(jake.officeNumber).toEqual(6789998212);
    });
    describe('getOfiiceNumber', () => {
        it('should return the GitHub of the employee', () => {
            const jake = new Manager('jake', 1, 'jake@gmail.com', 6789998212)

            expect(jake.getOfficeNumber).toEqual(6789998212);
        });
    });
    describe('getRole', () => {
        it('should return the role of the employee', () => {
            const jake = new Manager('jake', 1, 'jake@gmail.com', 6789998212)

            expect(jake.getRole).toEqual('Manager');
        });
    });
});