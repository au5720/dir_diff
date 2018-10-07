/*
cat 20181001.txt | grep -v "File(s)" | grep -v "^ Volume " | grep -v "<DIR>" | grep -v "^$"  > 20181001_clean.txt
*/

const ps = require('./parse_string');

const readFileLineByLineIntoArray = (filePath) => {
    const fs = require('fs');
    const fileData=fs.readFileSync(filePath, 'utf8');
    return fileData.split("\n");
};

const parseFileNames = (filePath) => {
    const md5 = require('crypto-md5');
    const fileData = readFileLineByLineIntoArray(filePath);
    let currentTopDirectoryName='';
    let data=[];
    for(let line of fileData) {
        if(ps.isTopDirectory(line)){
            currentTopDirectoryName=ps.getNameTopDirectory(line);
        } 
        else if(line !== "" && !(ps.isDirectory(line)) && !isNaN(line[0]) && line[0] !== " ")
        {
            let shortFileName=ps.getName(line);
            let dateTime=ps.getDateTime(line);
            let fileSize=ps.getFileSize(line) || 0;
            let fullFileName=currentTopDirectoryName + '\\' + shortFileName;
            let fileNameMD5 = md5(fullFileName);
            let dateTimeMS = ps.getDateTimeMS(line);
            data.push( [dateTimeMS, dateTime, fileSize, fullFileName]);
        }
    }
    return data;
};

module.exports = {
    readFileLineByLineIntoArray,
    parseFileNames
};
