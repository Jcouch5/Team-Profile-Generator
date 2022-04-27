const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe("Intialization", () =>{
        const jake = new Engineer('jake', 1, 'jake@gmail.com', 'jkay');

        expect(jake.name).toEqual('jake');
        expect(jake.id).toEqual(1);
        expect(jake.email).toEqual('jake@gmail.com');
        expect(jake.gitHub).toEqual('jkay');
    });
    describe('getGitHub', () => {
        it('should return the GitHub of the employee', () => {
            const jake = new Engineer('jake', 1, 'jake@gmail.com', 'jkay')

            expect(jake.getGitHub()).toEqual('jkay');
        });
    });
    describe('getRole', () => {
        it('should return the role of the employee', () => {
            const jake = new Engineer('jake', 1, 'jake@gmail.com', 'jkay')

            expect(jake.getRole()).toEqual('Engineer');
        });
    });
});