const assert = require('assert');

const ParseString = require('../src/parse_string');
const ParseFile = require('../src/parse_file');



// describe('Parse lines from dir /s', () => {

//   describe('Directory line tests', () => {
//     const inputStr='03/08/2016  15:22    <DIR>          clj';
//     it('#isDirectory() - should return true if <DIR> is in the file line', () => {
//         const test = ParseString.isDirectory(inputStr); 
//         assert.equal(test, true);
//     });
//   });

//   describe('File line tests', () => {
//     const inputStr='29/06/2015  12:27         1,055,929 libiconv-2.dll';

//     it('#getName - Should return name of file or directory', () => {
//         const name=ParseString.getName(inputStr);
//         assert.equal(name, 'libiconv-2.dll');
//     });

//     it('#getDateTime() - Should parse out the Date and Time as a String', () => {
//         const dateTime = ParseString.getDateTime(inputStr);
//         assert.equal(dateTime, '29/06/2015  12:27');
//     });

//     it('#getFileSize() - Should return the file size', () => {
//         const fileSize = ParseString.getFileSize(inputStr);
//         assert.equal(fileSize, 1055929);
//     });
//   });

//   describe('Top Directory line tests', () => {
//     const inputStr=' Directory of c:\\Windows\\WinSxS\\8dacf';

//     it('#isTopDirectory() - should return true if a top directory', () => {
//         const isTopDirectory=ParseString.isTopDirectory(inputStr);
//         assert.equal(isTopDirectory, true);
//     });

//     it('#getNameTopDirectory() - should return the Top Level Directory Name', () => {
//         const nameOfTopDirectory=ParseString.getNameTopDirectory(inputStr);
//         assert.equal(nameOfTopDirectory, 'c:\\Windows\\WinSxS\\8dacf');
//     });
//   });
// });

describe('Using a file', () => {
const fileData=`
Volume in drive C has no label.
Volume Serial Number is D808-E7EA

Directory of c:\

28/06/2017  14:46                 0 3020098195690ea114
28/06/2017  14:46                 0 3c091fd2284e840456579ec813
28/06/2017  14:46                 0 488817c7ea9d3bca0d
14/04/2016  12:33    <DIR>          bin
28/06/2017  14:46                 0 c6034ecd2599c4a6390d12e154abfd
03/08/2016  15:22    <DIR>          clj
13/04/2016  17:18    <DIR>          cljCLR
14/04/2016  12:07    <DIR>          clojureCLR
02/05/2017  10:55    <DIR>          cygwin64
05/10/2016  10:49    <DIR>          DataFeedSQL2016
14/04/2016  16:37    <DIR>          EASLog
13/12/2016  13:15    <DIR>          elixir
01/09/2016  10:08    <DIR>          erlang    
`;
    const fs = require('fs');
    const filePath='testfile.txt';
    if (! fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, fileData, 'utf8');
        console.log('Createing some test data for parsing tests');
    }
    // it('#readFileIntoArray() - Should return an array of objects representing the files', () => {
    //     const fileDataAsArray=ParseFile.readFileLineByLineIntoArray(filePath);
    //     // test the First and last Lines are equal to the test
    //     assert.equal(fileDataAsArray[1], 'Volume in drive C has no label.');
    // });
    it('#parseFilesName - Should return array with path and filename set', () => {

        ParseFile.parseFileName(filePath);
    });

});