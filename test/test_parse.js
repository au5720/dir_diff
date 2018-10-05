const ParseString = require('..\\src\\parse_string');

var assert = require('assert');
describe('Parse File', () => {
  describe('Detail Line Functions', () => {
    let inputStr='03/08/2016  15:22    <DIR>          clj';
    it('should return true if <DIR> is in the file line', () => {
        let test = ParseString.isDirectory(inputStr); 
        assert.equal(test, true);
    });
    it('Should return name of file or directory', () => {
        let name=ParseString.getName(inputStr);
        assert.equal(name, 'clj');
    });

    it(' Should parse out the Date and Time as a String', () => {
        let dateTime = ParseString.getDateTime(inputStr);
        assert.equal(dateTime, '03/08/2016  15:22');
    });
  });
});