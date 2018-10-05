
const ps = require('./parse_string');
const md5 = require('crypto-md5');



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
    let obj={};
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
            {
                obj[md5(fullFileName)] = {     
                    fullFileName: fullFileName,
                    size: fileSize,
                    dateTime: dateTime
                };
            }
        }
    }
    return obj;
};

module.exports = {
    readFileLineByLineIntoArray,
    parseFileNames
};
