
const ps = require('./parse_string');



const readFileLineByLineIntoArray = (filePath) => {
    const fs = require('fs');
    const fileData=fs.readFileSync(filePath, 'utf8');
    return fileData.split("\n");
};

const parseFileName = (filePath) => {
    const fileData = readFileLineByLineIntoArray(filePath);
    // Check to see if we have a top Directory name
    let currentTopDirectoryName='';
    console.log(JSON.stringify(fileData));

    for(let line of fileData) {
        if(ps.isTopDirectory(line)){
            currentTopDirectoryName=ps.getNameTopDirectory(line);
        } 
        else if(line !== "" && !(ps.isDirectory(line)) && !isNaN(line[0]))
        {
            let shortFileName=ps.getName(line);
            let dateTime=ps.getDateTime(line);
            let fileSize=ps.getFileSize(line);
            console.log(  Number(line[0]) );
            console.log(currentTopDirectoryName + "\\" + shortFileName, dateTime, fileSize);
            console.log('='.repeat(100));
        }

    }
};

module.exports = {
    readFileLineByLineIntoArray,
    parseFileName
};
