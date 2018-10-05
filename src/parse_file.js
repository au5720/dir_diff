
const ps = require('./parse_string');



const readFileLineByLineIntoArray = (filePath) => {
    const fs = require('fs');
    const fileData=fs.readFileSync(filePath, 'utf8');
    return fileData.split("\n");
};

const parseFileNames = (filePath) => {
    const fileData = readFileLineByLineIntoArray(filePath);
    // Check to see if we have a top Directory name
    let currentTopDirectoryName='';
    //console.log(fileData.length);
    for(let line of fileData) {
        if(ps.isTopDirectory(line)){
            currentTopDirectoryName=ps.getNameTopDirectory(line);
        } 
        else if(line !== "" && !(ps.isDirectory(line)) && !isNaN(line[0]))
        {
            let shortFileName=ps.getName(line);
            let dateTime=ps.getDateTime(line);
            let fileSize=ps.getFileSize(line);
            let fullFileName=currentTopDirectoryName + '\\' + shortFileName;
            console.log(fullFileName);
        }
    }
};

module.exports = {
    readFileLineByLineIntoArray,
    parseFileNames
};
