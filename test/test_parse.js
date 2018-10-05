const assert = require('assert');

const ParseString = require('..\\src\\parse_string');


describe('Parse File', () => {
  describe('Detail Line Functions', () => {
    const inputStr='03/08/2016  15:22    <DIR>          clj';
    it('should return true if <DIR> is in the file line', () => {
        const test = ParseString.isDirectory(inputStr); 
        assert.equal(test, true);
    });
    it('Should return name of file or directory', () => {
        const name=ParseString.getName(inputStr);
        assert.equal(name, 'clj');
    });

    it(' Should parse out the Date and Time as a String', () => {
        const dateTime = ParseString.getDateTime(inputStr);
        assert.equal(dateTime, '03/08/2016  15:22');
    });
  });
  describe('Directory Line Parsing', () => {
    const inputStr=' Directory of c:\\Windows\\WinSxS\\8dacf';
    it('Test if string is a top directory', () => {
        const isTopDirectory=ParseString.isTopDirectory(inputStr);
        assert.equal(isTopDirectory, true);
    });
    it('get the Top Level Directory Name', () => {
        const nameOfTopDirectory=ParseString.getNameTopDirectory(inputStr);
        assert.equal(nameOfTopDirectory, 'c:\\Windows\\WinSxS\\8dacf');

    });
  });
});