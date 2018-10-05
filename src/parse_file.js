
const ParseString = require('./parse_string');

console.log(__dirname);


const readFileLineByLineIntoArray = (filePath) => {
    const fs = require('fs');
    const fileData=fs.readFileSync(filePath, 'utf8');
    return fileData.split("\n");
};

const parseFileName = (filePath) => {
    const fileData = readFileLineByLineIntoArray(filePath);
    // Check to see if we have a top Directory name
    let currentTopDirectoryName='';
    for(let line of fileData) {
        if(line[0] !== ' ' && !ParseString.isDirectory(line)){
            if(ParseString.isTopDirectory(line)){
                currentTopDirectoryName=ParseString.getNameTopDirectory(line);
                console.log(currentTopDirectoryName);
            } 
        }

    }
};

module.exports = {
    readFileLineByLineIntoArray,
    parseFileName
};
