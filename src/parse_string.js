/*

Purpose:    File to process a dir /s output from windows
Author:     Jennifer Morgan
Date:       05/10/2018

*/


const extractPresets = {
    directory: [22,25],
    name: [36],
    dateTime: [0,17],
    topLevelDir: [1,10],
    topLevelDirName: [14]
};


const getName = (str) => {
    const start= extractPresets.name;
    return str.substring(start);
};

const isDirectory = (str) => {
    const [start, end] = extractPresets.directory;
    return str.substring(start,end) === 'DIR';
};

const getDateTime = (str) => {
    const [start, end] = extractPresets.dateTime;
    return str.substring(start, end);
};

const isTopDirectory = (str) => {
    const [start, end] = extractPresets.topLevelDir;
    return str.substring(start, end) === 'Directory';
};

const getNameTopDirectory = (str) => {
    const [start, end] = extractPresets.topLevelDirName;
    return str.substring(start);
};

module.exports = {
    isDirectory,
    getName,
    getDateTime,
    isTopDirectory,
    getNameTopDirectory
};

