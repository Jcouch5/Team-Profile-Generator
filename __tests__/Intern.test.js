const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe("Intialization", () =>{
        const jake = new Intern('jake', 1, 'jake@gmail.com', 'GT');

        expect(jake.name).toEqual('jake');
        expect(jake.id).toEqual(1);
        expect(jake.email).toEqual('jake@gmail.com');
        expect(jake.school).toEqual('GT');
    });
    describe('getSchool', () => {
        it('should return the GitHub of the employee', () => {
            const jake = new Intern('jake', 1, 'jake@gmail.com', 'GT')

            expect(jake.getSchool()).toEqual('GT');
        });
    });
    describe('getRole', () => {
        it('should return the role of the employee', () => {
            const jake = new Intern('jake', 1, 'jake@gmail.com', 'GT')

            expect(jake.getRole()).toEqual('Intern');
        });
    });
});