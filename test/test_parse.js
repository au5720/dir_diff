const assert = require('assert');

const ParseString = require('../src/parse_string');
const ParseFile = require('../src/parse_file');



describe('Parse lines from dir /s', () => {

  describe('Directory line tests', () => {
    const inputStr='03/08/2016  15:22    <DIR>          clj';
    it('#isDirectory() - should return true if <DIR> is in the file line', () => {
        const test = ParseString.isDirectory(inputStr); 
        assert.equal(test, true);
    });
  });

  describe('File line tests', () => {
    const inputStr='29/06/2015  12:27         1,055,929 libiconv-2.dll';

    it('#getName - Should return name of file or directory', () => {
        const name=ParseString.getName(inputStr);
        assert.equal(name, 'libiconv-2.dll');
    });

    it('#getDateTime() - Should parse out the Date and Time as a String', () => {
        const dateTime = ParseString.getDateTime(inputStr);
        assert.equal(dateTime.toString(), new Date('06/29/2015  12:27').toString());
    });

    it('#getDateTimeMS() - Should parse out the Date and Time as a String', () => {
        const dateTimeMS = ParseString.getDateTimeMS(inputStr);
        assert.equal(dateTimeMS, 1435577220000);
    });

    it('#getFileSize() - Should return the file size', () => {
        const fileSize = ParseString.getFileSize(inputStr);
        assert.equal(fileSize, 1055929);
    });
  });

  describe('Top Directory line tests', () => {
    const inputStr=' Directory of c:\\Windows\\WinSxS\\8dacf';

    it('#isTopDirectory() - should return true if a top directory', () => {
        const isTopDirectory=ParseString.isTopDirectory(inputStr);
        assert.equal(isTopDirectory, true);
    });

    it('#getNameTopDirectory() - should return the Top Level Directory Name', () => {
        const nameOfTopDirectory=ParseString.getNameTopDirectory(inputStr);
        assert.equal(nameOfTopDirectory, 'c:\\Windows\\WinSxS\\8dacf');
    });
  });
});

// describe('Using a file', () => {
//     const filePath='20181001.txt';
//     // it('#readFileIntoArray() - Should return an array of objects representing the files', () => {
//     //     const fileDataAsArray=ParseFile.readFileLineByLineIntoArray(filePath);
//     //     // test the First and last Lines are equal to the test
//     //     assert.equal(fileDataAsArray[1], 'Volume in drive C has no label.');
//     // });
//     it('#parseFileNames - Should return array with path and filename set', () => {
//         ParseFile.parseFileNames(filePath);
//     });

// });