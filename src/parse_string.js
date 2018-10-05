/*

Purpose:    File to process a dir /s output from windows
Author:     Jennifer Morgan
Date:       05/10/2018

*/


const extractPresets = {
    directory: [22,25],
    name: [36],
    dateTime: [0,17]
};

const isDirectory = (str) => {
    const [start, end] = extractPresets.directory;
    return str.substring(start,end) === 'DIR';
};

const getName = (str) => {
    const start= extractPresets.name;
    return str.substring(start);
};

const getDateTime = (str) => {
    const [start, end] = extractPresets.dateTime;
    return str.substring(start, end);
};
module.exports = {
    isDirectory,
    getName,
    getDateTime
};

